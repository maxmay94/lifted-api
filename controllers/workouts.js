import { Workout } from '../models/workout.js'

const index = async(req, res) => {
  try {
    const workouts = await Workout.find({})
    return res.status(200).json(workouts)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const show = async(req, res) => {
  console.log(req.params.id)
  try {
    const workout = await Workout.findById(req.params.id)
    return res.status(200).json(workout)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const create = async(req, res) => {
  try {
    const workout = new Workout(req.body)
    await workout.save()
    return res.status(200).json(workout)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const deleteWorkout = async(req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id)
    return res.status(204).end()
  } catch(err) {
    return res.status(500).json(err)
  }
}

const update = async(req, res) => {
  try {
    const workout = await(Workout.findByIdAndUpdate(req.params.id, req.body))
    await workout.save()
    return res.status(201).json(workout)
  } catch(err) {
    return res.status(500).json(err)
  }
}

export {
  index,
  show,
  create,
  deleteWorkout as delete,
  update
}