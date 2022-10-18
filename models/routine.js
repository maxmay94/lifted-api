import mongoose from 'mongoose'

const Schema = mongoose.Schema

const routineSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}],
  },
  { timestamps: true }
)

const routine = mongoose.model('Routine', routineSchema)

export { routine }