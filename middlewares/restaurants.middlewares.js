const { Restaurant } = require("../models/restaurant.model");

// Utils
const { catchAsync } = require('../utils/catchAsync.util')
const { AppError } = require('../utils/appError.util')

const restaurantExist = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const restaurant = await Restaurant.findOne({ where: { id } });

    if (!restaurant) {
      return res.status(404).json({
        status: "error",
        message: "Restaurant not found",
      });
    }

    req.restaurant = restaurant;
    next();
});

module.exports = { restaurantExist };
