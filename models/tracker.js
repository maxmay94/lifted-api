import mongoose from 'mongoose'

const Schema = mongoose.Schema

const trackerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    workouts: [{
      type: Schema.Types.ObjectId, 
      ref: 'Workout'
    }],
    setsReps: [String],
    user: {
      type: Schema.Types.ObjectId, 
      ref: 'Profile'
    }
  },
  { timestamps: true }
)

const tracker = mongoose.model('Tracker', trackerSchema)

export { tracker }