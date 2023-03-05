const Router = require('express').Router()
const controller = require('../controllers/DoctorController')

Router.get('/', controller.GetDoctors)
Router.get('/:doctor_id', controller.GetDoctorDetails)
Router.post('/createdoctor', controller.CreateDoctor)

module.exports = Router
