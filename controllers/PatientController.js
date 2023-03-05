const { Patient } = require('../models')

const GetPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll()
    res.send(patients)
  } catch (error) {
    throw error
  }
}

const GetPatientDetails = async (req, res) => {
  try {
    const patientDetail = await Patient.findByPk(req.params.patient_id)
    res.send(patientDetail)
  } catch (error) {
    throw error
  }
}

const CreatePatient = async (req, res) => {
  try {
    let patientBody = {
      ...req.body
    }
    const newPatient = await Patient.create(patientBody)
    res.send(newPatient)
  } catch (error) {
    throw error
  }
}

const UpdatePatient = async (req, res) => {
  try {
    let patientId = parseInt(req.params.patient_id)
    let updatedPatient = await Patient.update(req.body, {
      where: { id: patientId },
      returning: true
    })
    res.send(updatedPatient)
  } catch (error) {
    throw error
  }
}

const DeletePatient = async (req, res) => {
  try {
    let patientId = parseInt(req.params.patient_id)
    await Patient.destroy({ where: { id: patientId } })
    res.send({ message: `Deleted Patient with ID number ${patientId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPatients,
  GetPatientDetails,
  CreatePatient,
  UpdatePatient,
  DeletePatient
}
