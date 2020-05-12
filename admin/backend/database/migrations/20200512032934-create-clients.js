'use strict';
const DataTypes = require('sequelize/lib/data-types');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nomeEmpresa: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt:{
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt:{
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clientes');
  }
};
