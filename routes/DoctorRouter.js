const Router = require('express').Router()
const controller = require('../controllers/DoctorController')

Router.get('/', controller.GetDoctors)
Router.get('/find-doctor', controller.FindDoctor)
Router.post('/createdoctor', controller.CreateDoctor)
Router.get('/:doctor_id', controller.GetDoctorDetails)

module.exports = Router
