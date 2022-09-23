//Models
const { Meal } = require("../models/meal.model");

//Middleware
const mealExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const meal = await Meal.findOne({ where: { id } });

    if (!meal) {
      return res.status(404).json({
        status: "error",
        message: "Meal not found",
      });
    }

    req.meal = meal;
    next();
  } catch (error) {
    console.log(error);
  }
};

const restaurantIdExist = async (req, res, next) => {
  try {
    const { restaurantId } = req.params;

    const restaurantExist = await Meal.findOne({ where: { restaurantId } });

    if (!restaurantExist) {
      return res.status(404).json({
        status: "error",
        message: `Restaurant whit id ${restaurantId} not exist`,
      });
    }
    req.restaurantExist = restaurantExist;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { mealExist, restaurantIdExist };
