import { Stat } from '../models/stat.js'

const index = async(req, res) => {
  try {
    const stats = await Stat.find({}).populate('exercise').populate('user')
    return res.status(200).json(stats)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const show = async(req, res) => {
  try {
    const stat = await Stat.findById(req.params.id).populate('exercise').populate('user')
    return res.status(200).json(stat)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const showUserStats = async(req, res) => {
  // console.log(req.params.userId)
  try {
    const stats = await Stat.find({}).populate('exercise').populate('user')
    let ret = stats.filter(stat => stat.user._id.toString() === req.params.userId)
    return res.status(200).json(ret)
  } catch(err) {
    return res.stats(500).json(err)
  }
}

const create = async(req, res) => {
  try {
    const stat = new Stat(req.body)
    await stat.save()
    return res.status(200).json(stat)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const deleteStat = async(req, res) => {
  try {
    await Stat.findByIdAndDelete(req.params.id)
    return res.status(204).end()
  } catch(err) {
    return res.status(500).json(err)
  }
}

const update = async(req, res) => {
  try {
    const stat = await(Stat.findByIdAndUpdate(req.params.id, req.body))
    await stat.save()
    return res.status(201).json(stat)
  } catch(err) {
    return res.status(500).json(err)
  }
}

export {
  index,
  show,
  showUserStats,
  create,
  deleteStat as delete,
  update
}