const Router = require('express').Router()
const controller = require('../controllers/PatientController')

Router.get('/', controller.GetPatients)
Router.get('/:patient_id', controller.GetPatientDetails)
// Router.post('/registerpatient', controller.CreatePatient)
Router.post('/registerpatient', controller.RegisterPatient)
Router.put('/update/:patient_id', controller.UpdatePatient)
Router.delete('/delete/:patient_id', controller.DeletePatient)

module.exports = Router
