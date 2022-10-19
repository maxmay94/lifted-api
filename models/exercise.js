import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description: { type: String },
    muscle: {
      type: String,
      enum:[
        'chest',
        'back',
        'biceps',
        'triceps',
        'abs',
        'legs',
        'quads',
        'hamstrings',
        'arms',
        'shoulders',
        'obliques',
        'traps',
        'lats',
        'delts',
        'cardio',
        'full body'
      ]
    },
    url: { type: String }
  },
  { timestamps: true }
)

const Exercise = mongoose.model('Exercise', exerciseSchema)

export { Exercise }