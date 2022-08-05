const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cocktail extends Model {}

Cocktail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cocktail_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preparation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    garnish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "cocktail",
  }
);

module.exports = Cocktail;
