'use strict';
module.exports = function(sequelize, DataTypes) {
  var ToDoList = sequelize.define('ToDoList', {
    username: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    email: DataTypes.STRING,
    remind: DataTypes.BOOLEAN,
    remindTime: DataTypes.STRING,
    restaurantPhone: DataTypes.STRING,
    restaurantURL: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ToDoList;
};
