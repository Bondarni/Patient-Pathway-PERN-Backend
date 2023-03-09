const { Doctor } = require('../models')
const { Op } = require('sequelize')

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

const FindDoctor = async (req, res) => {
  try {
    const { search } = req.query
    console.log(search)
    const doctors = await Doctor.findAll({
      where: {
        [Op.or]: [
          { firstName: search },
          { lastName: search },
          { specialty: search }
        ]
      }
    })

    if (doctors) {
      return res.status(200).json({ doctors })
    }
    return res.status(401).send('No matching doctors found')
  } catch (error) {
    return res.status(500).send(error.message)
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
  FindDoctor,
  CreateDoctor
}
