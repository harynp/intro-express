'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subjects = sequelize.define('Subjects', {
    subject_name: DataTypes.STRING
  });
  Subjects.associate = function (models) {
    Subjects.hasMany(models.Teachers, {foreignKey: 'subjectsId'});
    Subjects.hasMany(models.Student, {foreignKey: 'subjectsId'});
  };
  return Subjects;
};
