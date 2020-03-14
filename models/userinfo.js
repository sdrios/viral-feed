'use strict';
module.exports = (sequelize, DataTypes) => {
  const userInfo = sequelize.define('userInfo', {
    userID: DataTypes.STRING,
    userName: DataTypes.STRING,
    actionsCounter: DataTypes.INTEGER
  }, {});
  userInfo.associate = function(models) {
    // associations can be defined here
  };
  return userInfo;
};