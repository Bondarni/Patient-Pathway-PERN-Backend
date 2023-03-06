const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')

Router.get('/', controller.GetAppointments)
Router.get('/:appointment_id', controller.GetAppointmentDetails)
Router.post(
  '/patient/:patient_id/doctor/:doctor_id',
  controller.CreateAppointment
)

module.exports = Router
