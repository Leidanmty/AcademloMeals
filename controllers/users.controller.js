//files whit security
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

//Models
const { User } = require("../models/users.model");
const { Order } = require("../models/orders.model");

//creating endpoints functions
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });

    res.status(201).json({
      status: "succes",
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    //Get email and password from req.body
    const { email, password } = req.body;

    //Validate if the user exist whit given email
    const user = await User.findOne({
      where: { email, status: "active" },
    });
    /* Compare password(entered password vs db password)
    If user doesn't exists or password doesn't match, send error */

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({
        status: "error",
        message: "User or password incorrect please try again",
      });
    }

    //Remove password from response
    user.password = undefined;

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const { user } = req;

    await user.update({ name, email });

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  const { user } = req;

  await user.update({ status: "deleted" });

  res.status(204).json({ status: "success" });
};

const allOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();

    res.status(200).json({
      status: "success",
      data: {
        orders,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const oneOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({
      where: { id },
    });

    res.status(200).json({
      status: "success",
      data: {
        order,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  login,
  updateUser,
  deleteUser,
  allOrders,
  oneOrderById,
};
