'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      visit_reason: {
        type: Sequelize.STRING
      },
      patient_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'patient_id',
        onDelete: 'CASCADE',
        references: {
          model: 'patients',
          key: 'id'
        }
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'doctor_id',
        onDelete: 'CASCADE',
        references: {
          model: 'doctors',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments')
  }
}
