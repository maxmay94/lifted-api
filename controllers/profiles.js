import { Profile } from '../models/profile.js'

const index = async(req, res) => {
  try {
    const profiles = await Profile.find({})
      .populate({
        path: 'routines',
        populate: {
          path: 'workouts',
          populate: {
            path: 'exercises'
          }
        }
      })
    res.status(200).json(profiles)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const addRoutine = async(req, res) => {
  console.log(req.body)
  try {
    const profile = await(Profile.findByIdAndUpdate(req.params.id, req.body))
    console.log(profile)
    await profile.save()
    return res.status(200).json(profile)
  } catch(err) {
    res.status(500).json(err)
  }
}

export { 
  index,
  addRoutine
}
