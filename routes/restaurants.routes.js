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
const {
  protectSession,
  protectAdmin,
} = require("../middlewares/auth.middlewares");

//Routes
const restaurantsRouter = express.Router();

restaurantsRouter.get("/", allRestaurants);

restaurantsRouter.get("/:id", restaurantExist, oneRestaurant);

//Protected whit admin middleware

//Protected session whit middleware
restaurantsRouter.use(protectSession);

restaurantsRouter.post("/", createRestaurantValidators, createRestaurant);

restaurantsRouter.post("/reviews/:id", restaurantExist, createReview);

restaurantsRouter.patch("/reviews", updateReview);

restaurantsRouter.delete("/reviews", deleteReview);

restaurantsRouter.use(protectAdmin);

restaurantsRouter.patch("/:id", restaurantExist, updateRestaurant);

restaurantsRouter.delete("/:id", restaurantExist, removeRestaurant);

module.exports = { restaurantsRouter };
