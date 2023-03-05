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
    let appointment = await Appointment.create(appointmentBody)
    res.send(appointment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateAppointment
}
