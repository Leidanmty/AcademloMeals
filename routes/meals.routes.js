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

//Routes
const mealsRoutes = express.Router();

mealsRoutes.post("/restaurantId", createMeal);

mealsRoutes.get("/", allMeals);

mealsRoutes.get("/:id", oneMeal);

mealsRoutes.patch("/:id", updateMeal);

mealsRoutes.delete("/:id", removeMeal);

module.exports = { mealsRoutes };
