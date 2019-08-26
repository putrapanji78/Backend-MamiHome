'use strict';
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define('booking', {
    rent_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    dateOfEntry: DataTypes.STRING,
    stay: DataTypes.STRING,
    outDate: DataTypes.STRING
  }, {});
  booking.associate = function(models) {
    // associations can be defined here
  };
  return booking;
};