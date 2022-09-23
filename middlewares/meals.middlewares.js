//Models
const { Meal } = require("../models/meal.model");

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
  const { restaurantId } = req.params;

  const restaurantExist = await Meal.findOne({ where: { restaurantId } });

  if (!restaurantExist) {
    return next(new AppError("`Restaurant wiht id not exist", 404));
    /*res.status(404).json({
      status: "error",
      message: `Restaurant whit id ${restaurantId} not exist`,
    });*/
  }
  req.restaurantExist = restaurantExist;
  next();
});

module.exports = { mealExist, restaurantIdExist };
