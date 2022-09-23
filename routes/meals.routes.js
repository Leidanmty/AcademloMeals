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

//Routes
const mealsRouter = express.Router();

mealsRouter.post("/:restaurantId", restaurantIdExist, createMeal);

mealsRouter.get("/", createMealValidators, allMeals);

mealsRouter.get("/:id", mealExist, oneMeal);

mealsRouter.patch("/:id", mealExist, updateMeal);

mealsRouter.delete("/:id", mealExist, removeMeal);

module.exports = { mealsRouter };
