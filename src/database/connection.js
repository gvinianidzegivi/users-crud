const { Sequelize } = require("sequelize");
const Product = require("./product.model");
const User = require("./user.model");

const sequelize = new Sequelize("postgres", "root", "root", {
  host: "localhost",
  dialect: "postgres",
  //   port: 5432,
});

User.init(sequelize);
Product.init(sequelize);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await Promise.all([
      User.sync({ force: false }).catch((err) => console.log(err)),
      Product.sync({ force: false }).catch((err) => console.console.log(err)),
    ]);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
