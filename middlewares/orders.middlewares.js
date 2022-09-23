const { Order } = require("../models/order.model");

// Utils
const { catchAsync } = require('../utils/catchAsync.util')
const { AppError } = require('../utils/appError.util')

const orderExist = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const order = await Order.findOne({ where: { id } });

    if (!order) {
      return res.status(404).json({
        status: "error",
        message: "Order not found",
      });
    }

    req.order = order;
    next();
});

module.exports = { orderExist };
