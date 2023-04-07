const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(connection) {
    super.init(
      {
        nickName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        balance: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
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
        tableName: "users",
      }
    );
  }
}

module.exports = User;
