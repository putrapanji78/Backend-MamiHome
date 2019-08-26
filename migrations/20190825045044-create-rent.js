'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      User_ID:{
        type: Sequelize.INTEGER
      },
      RentName: {
        type: Sequelize.STRING
      },
      RentAddress: {
        type: Sequelize.STRING
      },
      Area: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longtitude: {
        type: Sequelize.DOUBLE
      },
      RentOwner: {
        type: Sequelize.STRING
      },
      OwnerPhoneNumber: {
        type: Sequelize.STRING
      },
      OwnerPhoneNumber: {
        type: Sequelize.STRING
      },
      roomLeft: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      Image1: {
        type: Sequelize.STRING
      },
      Image2: {
        type: Sequelize.STRING
      },
      Image3: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rents');
  }
};