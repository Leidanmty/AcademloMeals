const express = require("express");

//Controllers
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

//Middlewares
const { restaurantExist } = require("../middlewares/restaurants.middlewares");
const {
  createRestaurantValidators,
} = require("../middlewares/validator.middlewares");

//Routes
const restaurantsRoutes = express.Router();

restaurantsRoutes.post("/", createRestaurantValidators, createRestaurant);

restaurantsRoutes.get("/", allRestaurants);

restaurantsRoutes.get("/:id", restaurantExist, oneRestaurant);

restaurantsRoutes.patch("/:id", restaurantExist, updateRestaurant);

restaurantsRoutes.delete("/:id", restaurantExist, removeRestaurant);

restaurantsRoutes.post("/reviews/:restaurantId", createReview);

restaurantsRoutes.patch("/reviews", updateReview);

restaurantsRoutes.delete("/reviews", deleteReview);

module.exports = { restaurantsRoutes };
