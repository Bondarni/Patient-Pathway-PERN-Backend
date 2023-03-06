const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')

Router.get('/', controller.GetAppointments)
Router.get('/:appointment_id', controller.GetAppointmentDetails)
Router.post(
  '/patient/:patient_id/doctor/:doctor_id',
  controller.CreateAppointment
)
Router.put('/:appointment_id', controller.UpdateAppointment)
Router.delete('/:appointment_id', controller.DeleteAppointment)

module.exports = Router
