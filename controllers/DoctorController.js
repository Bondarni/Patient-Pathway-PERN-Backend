const { Doctor } = require('../models')

const GetDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll()
    res.send(doctors)
  } catch (error) {
    throw error
  }
}

const GetDoctorDetails = async (req, res) => {
  try {
    const doctorDetail = await Doctor.findByPk(req.params.doctor_id)
    res.send(doctorDetail)
  } catch (error) {
    throw error
  }
}

const CreateDoctor = async (req, res) => {
  try {
    let doctorBody = {
      ...req.body
    }
    const newDoctor = await Doctor.create(doctorBody)
    res.send(newDoctor)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetDoctors,
  GetDoctorDetails,
  CreateDoctor
}
