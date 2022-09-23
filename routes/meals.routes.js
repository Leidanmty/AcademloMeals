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
const mealsRoutes = express.Router();

mealsRoutes.post(
  "/:restaurantId",
  restaurantIdExist,
  createRestaurantValidators,
  createMeal
);

mealsRoutes.get("/", createMealValidators, allMeals);

mealsRoutes.get("/:id", mealExist, oneMeal);

mealsRoutes.patch("/:id", mealExist, updateMeal);

mealsRoutes.delete("/:id", mealExist, removeMeal);

module.exports = { mealsRoutes };
