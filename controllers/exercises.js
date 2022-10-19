import { Exercise } from '../models/exercise.js'

const index = async(req, res) => {
  try {
    const exercises = await Exercise.find({})
    return res.status(200).json(exercises)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const show = async(req, res) => {
  console.log(req.params.id)
  try {
    const exercise = await Exercise.findById(req.params.id)
    return res.status(200).json(exercise)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const create = async(req, res) => {
  try {
    const exercise = new Exercise(req.body)
    await exercise.save()
    return res.status(200).json(exercise)
  } catch(err) {
    return res.status(500).json(err)
  }
}

export {
  index,
  show,
  create
}