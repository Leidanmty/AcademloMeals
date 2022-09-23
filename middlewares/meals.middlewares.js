//Models
const { Meal } = require("../models/meal.model");
const { Restaurant } = require("../models/restaurant.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { AppError } = require("../utils/appError.util");

//Middleware
const mealExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const meal = await Meal.findOne({ where: { id } });

  if (!meal) {
    return next(new AppError("Meal not found", 404));
    /*res.status(404).json({
        status: "error",
        message: "Meal not found",
      });*/
  }

  req.meal = meal;
  next();
});

const restaurantIdExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const restaurantId = await Restaurant.findOne({ where: { id } });

  if (!restaurantId) {
    return next(new AppError("`Restaurant with id not exist", 404));
    /*res.status(404).json({
      status: "error",
      message: `Restaurant whit id ${restaurantId} not exist`,
    });*/
  }
  req.restaurantId = restaurantId;
  next();
});

module.exports = { mealExist, restaurantIdExist };
