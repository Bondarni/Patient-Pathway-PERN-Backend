'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.belongsToMany(models.Doctor, {
        as: 'appointments',
        through: 'models.Appointment',
        foreignKey: 'patient_id'
      })
    }
  }
  Patient.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Patient',
      tableName: 'patients'
    }
  )
  return Patient
}
