const { Order } = require("../models/orders.model");

const orderExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const order = await Order.findOne({ where: { id } });

    if (!order) {
      return res.status(404).json({
        status: "error",
        message: "Oder not found",
      });
    }

    req.order = order;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { orderExist };
