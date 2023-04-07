const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(connection) {
    super.init(
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        deleteAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize: connection,
        timestamps: true,
        tableName: "products",
      }
    );
  }
}

module.exports = Product;
