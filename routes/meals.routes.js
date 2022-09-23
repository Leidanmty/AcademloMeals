const express = require("express");

//Controllers
const {
  createMeal,
  allMeals,
  oneMeal,
  updateMeal,
  removeMeal,
} = require("../controllers/meals.controller");

//Middlewares
const {
  createMealValidators,
} = require("../middlewares/validator.middlewares");
const {
  restaurantIdExist,
  mealExist,
} = require("../middlewares/meals.middlewares");
const {
  protectSession,
  protectAdmin,
} = require("../middlewares/auth.middlewares");

//Routes
const mealsRouter = express.Router();

mealsRouter.get("/", createMealValidators, allMeals);

mealsRouter.get("/:id", mealExist, oneMeal);

//protected session
mealsRouter.use(protectSession);

mealsRouter.post("/:id", restaurantIdExist, createMeal);

mealsRouter.use(protectAdmin);

mealsRouter.patch("/:id", mealExist, updateMeal);

mealsRouter.delete("/:id", mealExist, removeMeal);

module.exports = { mealsRouter };
