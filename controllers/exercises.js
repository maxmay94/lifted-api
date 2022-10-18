import { Exercise } from '../models/exercise.js'

function index(req, res) {
  Exercise.find({})
  .then(exercises => res.json(exercises))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { index }