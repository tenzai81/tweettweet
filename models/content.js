'use strict';
module.exports = (sequelize, DataTypes) => {
  const content = sequelize.define('content', {
    posting: DataTypes.TEXT
  }, {});
  content.associate = function(models) {
    // // content belongs to users
    // content.belongsTo(models.Users)
  };
  return content;
};