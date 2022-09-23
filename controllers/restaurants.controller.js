//files whit security
const dotenv = require("dotenv");

//Models
const { Restaurant } = require("../models/restaurant.model");
const { Review } = require("../models/review.model");
const { User } = require("../models/user.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

dotenv.config({ path: "./details.env" });

//Creating endpoints functions
const createRestaurant = catchAsync(async (req, res, next) => {
  const { name, address, rating } = req.body;
  const newRestaurant = await Restaurant.create({ name, address, rating });

  res.status(201).json({
    status: "succes",
    data: {
      newRestaurant,
    },
  });
});

const allRestaurants = catchAsync(async (req, res, next) => {
  const restaurants = await Restaurant.findAll({
    where: { status: "active" },
    include: {
      model: Review,
    },
  });

  res.status(200).json({
    status: "success",
    data: {
      restaurants,
    },
  });
});

const oneRestaurant = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const restaurant = await Restaurant.findOne({
    where: { id },
    include: { model: Review, where: { status: "active", required: false } },
  });

  res.status(200).json({
    status: "success",
    data: {
      restaurant,
    },
  });
});

const updateRestaurant = catchAsync(async (req, res, next) => {
  const { name, address } = req.body;
  const { restaurant } = req;

  await restaurant.update({ name, address });

  res.status(200).json({
    status: "success",
    data: { restaurant },
  });
});

const removeRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;

  await restaurant.update({ status: "deleted" });

  res.status(204).json({ status: "success" });
});

const createReview = catchAsync(async (req, res, next) => {
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
});

const updateReview = catchAsync(async (req, res, next) => {
  const { comment, rating } = req.body;
  const { restaurant } = req;

  await restaurant.update({ comment, rating });

  res.status(200).json({
    status: "success",
    data: { restaurant },
  });
});

const deleteReview = catchAsync(async (req, res, next) => {
  const { restaurant } = req;

  await restaurant.update({ status: "deleted" });

  res.status(204).json({ status: "success" });
});

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
