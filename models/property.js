'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.belongsTo(models.Annonce);
    }
  };
  Property.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    surface: DataTypes.FLOAT,
    description: DataTypes.STRING,
    keyword: DataTypes.STRING,
    caracter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};