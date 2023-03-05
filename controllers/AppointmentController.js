const { Appointment, Patient, Doctor } = require('../models')

const CreateAppointment = async (req, res) => {
  try {
    let patientId = parseInt(req.params.patient_id)
    let doctorId = parseInt(req.params.doctor_id)
    let appointmentBody = {
      patient_id: patientId,
      doctor_id: doctorId,
      ...req.body
    }
    console.log(appointmentBody)
    // let appointment = await Appointment.create(appointmentBody)
    // res.send(appointment)
  } catch (error) {
    throw error
  }
}

const GetAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll()
    res.send(appointments)
  } catch (error) {
    throw error
  }
}

const GetAppointmentDetails = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.appointment_id)
    res.send(appointment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateAppointment,
  GetAppointments,
  GetAppointmentDetails
}
