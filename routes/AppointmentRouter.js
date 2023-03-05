const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')

Router.post(
  '/patient/:patient_id/doctor/:doctor_id',
  controller.CreateAppointment
)

module.exports = Router
