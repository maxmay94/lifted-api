import { Routine } from '../models/routine.js'

const index = async(req, res) => {
  try {
    const routines = await Routine.find({})
    return res.status(200).json(routines)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const show = async(req, res) => {
  console.log(req.params.id)
  try {
    const routine = await Routine.findById(req.params.id)
    return res.status(200).json(routine)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const create = async(req, res) => {
  try {
    const routine = new Routine(req.body)
    await routine.save()
    return res.status(200).json(routine)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const deleteRoutine = async(req, res) => {
  try {
    await Routine.findByIdAndDelete(req.params.id)
    return res.status(204).end()
  } catch(err) {
    return res.status(500).json(err)
  }
}

const update = async(req, res) => {
  try {
    const routine = await(Routine.findByIdAndUpdate(req.params.id, req.body))
    await routine.save()
    return res.status(201).json(routine)
  } catch(err) {
    return res.status(500).json(err)
  }
}

export {
  index,
  show,
  create,
  deleteRoutine as delete,
  update
}