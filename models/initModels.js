//Models
const { User } = require("./users.model");
const { Restaurant } = require("./restaurants.model");
const { Review } = require("./reviews.model");
const { Meal } = require("./meals.model");
const { Order } = require("./orders.model");

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
