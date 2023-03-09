const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')
const middleware = require('../middleware')

Router.get('/', controller.GetAppointments)
Router.get('/:appointment_id', controller.GetAppointmentDetails)
Router.get('/:patient_id/appointments', controller.GetPatientAppointments)
Router.post(
  '/patient/:patient_id/doctor/:doctor_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateAppointment
)
Router.put(
  '/:appointment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateAppointment
)
Router.delete(
  '/:appointment_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteAppointment
)

module.exports = Router
