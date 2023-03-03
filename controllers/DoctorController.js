const { Doctor } = require('../models')

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
  CreateDoctor
}
