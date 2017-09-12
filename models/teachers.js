'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    subjectsId: DataTypes.INTEGER,
  });
  Teachers.associate = function (models) {
    Teachers.belongsTo(models.Subjects,{foreignKey:'subjectsId'});
  };

  return Teachers;
};
