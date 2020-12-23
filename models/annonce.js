'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Annonce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Annonce.hasMany(models.Property);
      Annonce.belongsTo(models.Agent);
    }
  };
  Annonce.init({
    name: DataTypes.STRING,
    agent: DataTypes.STRING,
    salestartdate: DataTypes.DATE,
    saleenddate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Annonce',
  });
  return Annonce;
};