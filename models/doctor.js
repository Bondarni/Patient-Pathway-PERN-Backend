'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Doctor.hasMany(models.Appointment, {
        foreignKey: 'doctor_id',
        as: 'doctors',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Doctor.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      clinicName: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Doctor',
      tableName: 'doctors'
    }
  )
  return Doctor
}
