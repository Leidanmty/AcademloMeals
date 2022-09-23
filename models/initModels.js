//Models
const { User } = require("./user.model");
const { Restaurant } = require("./restaurant.model");
const { Review } = require("./review.model");
const { Meal } = require("./meal.model");
const { Order } = require("./order.model");

const initModels = () => {
  //1 User < ----- > M Orders
  User.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(User);

  //1 Order < ----- > 1 Meal
  Order.hasOne(Meal, { sourceKey: "id" });
  Meal.belongsTo(Order);

  //1 Meal < ----- > 1 Order
  Meal.hasOne(Order, { foreignKey: "mealId" });
  Order.belongsTo(Meal);

  //M Meals < ----- > 1 Restaurant
  Meal.hasOne(Restaurant, { sourceKey: "id" });
  Restaurant.hasMany(Meal);

  //1 Restaurant < ----- > M Meals
  Restaurant.hasMany(Meal, { foreignKey: "restaurantId" });
  Meal.belongsTo(Restaurant);

  //1 restaurant < ------ > M Reviews
  Restaurant.hasMany(Review, { foreignKey: "restaurantId" });
  Review.belongsTo(Restaurant);
};

module.exports = { initModels };
