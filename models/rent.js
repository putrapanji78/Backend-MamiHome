'use strict';
module.exports = (sequelize, DataTypes) => {
  const rent = sequelize.define('rent', {
    User_ID: DataTypes.INTEGER,
    RentName: DataTypes.STRING,
    RentAddress: DataTypes.STRING,
    Area: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longtitude: DataTypes.STRING,
    RentOwner: DataTypes.STRING,
    OwnerPhoneNumber: DataTypes.STRING,
    roomLeft: DataTypes.STRING,
    price: DataTypes.STRING,
    Image1: DataTypes.STRING,
    Image2: DataTypes.STRING,
    Image3: DataTypes.STRING

  }, {});
  rent.associate = function(models) {
    rent.belongsTo(models.user,{
      as : 'user',
      foreignKey: 'User_ID'
    })
  };
  return rent;
};