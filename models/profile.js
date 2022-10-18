import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  isAdmin: {
    type: Boolean,
    dafault: false
  },
  routines: [{type: Schema.Types.ObjectId, ref: 'Routine'}],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
