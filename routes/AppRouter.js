const Router = require('express').Router()
const PatientRouter = require('./PatientRouter')
const DoctorRouter = require('./DoctorRouter')

Router.use('/patients', PatientRouter)
Router.use('/doctors', DoctorRouter)

module.exports = Router
