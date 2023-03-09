const Router = require('express').Router()
const controller = require('../controllers/PatientController')
const middleware = require('../middleware')

Router.get('/', controller.GetPatients)
Router.get(
  '/session',
  middleware.verifyToken,
  middleware.stripToken,
  controller.CheckSession
)
Router.get('/details/:patient_id', controller.GetPatientDetails)
Router.post('/register', controller.RegisterPatient)
Router.post('/login', controller.LoginPatient)
Router.put(
  '/update_password/:patient_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
Router.put(
  '/update/:patient_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePatient
)
Router.delete(
  '/delete/:patient_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePatient
)

module.exports = Router
