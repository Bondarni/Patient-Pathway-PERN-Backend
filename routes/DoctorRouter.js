const Router = require('express').Router()
const controller = require('../controllers/DoctorController')

Router.post('/createdr', controller.CreateDoctor)

module.exports = Router
