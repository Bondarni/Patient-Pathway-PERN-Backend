const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')

Router.post(
  '/patient/:patient_id/doctor/:doctor_id',
  controller.CreateAppointment
)
Router.get('/', controller.GetAppointments)
Router.get('/details/:appointment_id', controller.GetAppointmentDetails)

module.exports = Router
