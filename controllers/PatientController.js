const { Patient } = require('../models')
const middleware = require('../middleware')

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

const RegisterPatient = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const patient = await Patient.create({
      firstName,
      lastName,
      email,
      passwordDigest
    })
    res.send(patient)
  } catch (error) {
    throw error
  }
}

const LoginPatient = async (req, res) => {
  try {
    const { email, password } = req.body
    const patient = await Patient.findOne({
      where: { email: email },
      raw: true
    })
    let matched = await middleware.comparePassword(
      patient.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: patient.id,
        email: patient.email
      }
      let token = middleware.createToken(payload)
      return res.send({ patient: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred on Login!' })
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const patient = await Patient.findByPk(req.params.patient_id)
    let matched = await middleware.comparePassword(
      patient.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await patient.update({ passwordDigest })
      let payload = {
        id: patient.id,
        email: patient.email
      }
      return res.send({ status: 'Password Updated!', patient: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
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
  RegisterPatient,
  LoginPatient,
  UpdatePassword,
  UpdatePatient,
  DeletePatient
}
