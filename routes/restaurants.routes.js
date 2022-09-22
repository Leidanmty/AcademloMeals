const express = require("express");
const {
  createRestaurant,
  allRestaurants,
  oneRestaurant,
  updateRestaurant,
  removeRestaurant,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/restaurants.controller");

//Controllers

//Middlewares

//Routes
const restaurantsRoutes = express.Router();

restaurantsRoutes.post("/", createRestaurant);

restaurantsRoutes.get("/", allRestaurants);

restaurantsRoutes.get("/:id", oneRestaurant);

restaurantsRoutes.patch("/:id", updateRestaurant);

restaurantsRoutes.delete("/:id", removeRestaurant);

restaurantsRoutes.post("/reviews/:restaurantId", createReview);

restaurantsRoutes.patch("/reviews", updateReview);

restaurantsRoutes.delete("/reviews", deleteReview);

module.exports = { restaurantsRoutes };
