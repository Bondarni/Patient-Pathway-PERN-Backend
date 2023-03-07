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
      Patient.hasMany(models.Appointment, {
        foreignKey: 'patient_id',
        as: 'patients',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Patient.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profile_img: {
        type: DataTypes.STRING,
        allowNull: true
      },
      insurance: {
        type: DataTypes.STRING,
        allowNull: false
      },
      date_of_birth: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      }
    },
    {
      sequelize,
      modelName: 'Patient',
      tableName: 'patients'
    }
  )
  return Patient
}
