import { Exercise } from '../models/exercise.js'

export const index = async(req, res) => {
  try {
    const exercises = await Exercise.find({})
    return res.status(200).json(exercises)
  } catch(err) {
    return res.status(500).json(err)
  }
}

export const show = async(req, res) => {
  try {
    const exercise = findById(req.params.id)
    return res.status(200).json(exercise)
  } catch(err) {
    return res.status(500).json(err)
  }
}

export const create = async(req, res) => {
  console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@\n', req.body ,'\n@@@@@@@@@@@@@@@@@@@@@@@@@@@\n')
  try {
    const exercise = new Exercise(req.body)
    await exercise.save()
    return res.status(200).json(exercise)
  } catch(err) {
    return res.status(500).json(err)
  }
}