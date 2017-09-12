'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    subjectsId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Student.associate = function (models) {
    const Students = this.sequelize.define('Student', {foreignKey:'subjectsId'})
    Students.belongsTo(models.Subjects);
  };
  return Student;
};
