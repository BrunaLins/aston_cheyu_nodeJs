'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      surface: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.STRING
      },
      keyword: {
        type: Sequelize.STRING
      },
      caracter: {
        type: Sequelize.STRING
      },
      AnnonceId:{
        type:sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references:{
          model: 'Annonces',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Properties');
  }
};