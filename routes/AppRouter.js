const Router = require('express').Router()
const PatientRouter = require('./PatientRouter')
const DoctorRouter = require('./DoctorRouter')
const AppointmentRouter = require('./AppointmentRouter')

Router.use('/patients', PatientRouter)
Router.use('/doctors', DoctorRouter)
Router.use('/appointments', AppointmentRouter)

module.exports = Router
