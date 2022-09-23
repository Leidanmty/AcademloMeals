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
const restaurantsRouter = express.Router();

restaurantsRouter.post("/", createRestaurantValidators, createRestaurant);

restaurantsRouter.get("/", allRestaurants);

restaurantsRouter.get("/:id", restaurantExist, oneRestaurant);

restaurantsRouter.patch("/:id", restaurantExist, updateRestaurant);

restaurantsRouter.delete("/:id", restaurantExist, removeRestaurant);

restaurantsRouter.post("/reviews/:restaurantId", createReview);

restaurantsRouter.patch("/reviews", updateReview);

restaurantsRouter.delete("/reviews", deleteReview);

module.exports = { restaurantsRouter };
