'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, 
  {
    sequelize,
    timestamps: false,
    underscored: true,
  });

  return user;
};
