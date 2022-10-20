import mongoose from 'mongoose'

const Schema = mongoose.Schema

const statSchema = new Schema(
  {
    date: { type: Date },
    exercise: {
      type: Schema.Types.ObjectId, 
      ref: 'Exercise'
    },
    reps: [Number],
    weights: [String],
    user: {
      type: Schema.Types.ObjectId, 
      ref: 'Profile'
    }
  },
  { timestamps: true }
)

const Stat = mongoose.model('Stat', statSchema)

export { Stat }