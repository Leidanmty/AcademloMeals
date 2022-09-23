//Models
const { Restaurant } = require("../models/restaurant.model");
const { Review } = require("../models/review.model");
const { User } = require("../models/user.model");
//Creating endpoints functions
const createRestaurant = async (req, res) => {
  try {
    const { name, address, rating } = req.body;
    const newRestaurant = await Restaurant.create({ name, address, rating });

    res.status(201).json({
      status: "succes",
      data: {
        newRestaurant,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const allRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({});

    res.status(200).json({
      status: "success",
      data: {
        restaurants,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const oneRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: { id },
    });

    res.status(200).json({
      status: "success",
      data: {
        restaurant,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { name, address } = req.body;
    const { restaurant } = req;

    await restaurant.update({ name, address });

    res.status(200).json({
      status: "success",
      data: { restaurant },
    });
  } catch (error) {
    console.log(error);
  }
};

const removeRestaurant = async (req, res) => {
  try {
    const { restaurant } = req;

    await restaurant.update({ status: "deleted" });

    res.status(204).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

const createReview = async (req, res) => {
  try {
    const { comment, rating } = req.body;
    const { restaurant } = req;

    const newReview = await Review.create({
      comment,
      rating,
      restaurantId: restaurant.id,
      userId: 1,
    });

    res.status(201).json({
      status: "succes",
      data: { newReview },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateReview = async (req, res) => {
  try {
    const { comment, rating } = req.body;
    const { restaurant } = req;

    await restaurant.update({ comment, rating });

    res.status(200).json({
      status: "success",
      data: { restaurant },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteReview = async (req, res) => {
  try {
    const { restaurant } = req;

    await restaurant.update({ status: "deleted" });

    res.status(204).json({ status: "success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRestaurant,
  allRestaurants,
  oneRestaurant,
  updateRestaurant,
  removeRestaurant,
  createReview,
  updateReview,
  deleteReview,
};
