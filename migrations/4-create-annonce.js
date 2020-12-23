'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Annonces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      agent: {
        type: Sequelize.STRING
      },
      salestartdate: {
        type: Sequelize.DATE
      },
      saleenddate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      AgentId:{
        type:sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references:{
          model: 'Agents',
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
    await queryInterface.dropTable('Annonces');
  }
};