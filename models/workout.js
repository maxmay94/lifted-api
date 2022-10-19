import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    exercises: [{type: Schema.Types.ObjectId, ref: 'Exercise'}],
    setsReps: { type: [String] }
  },
  { timestamps: true }
)

const Workout = mongoose.model('Workout', workoutSchema)

export { Workout }