import mongoose from 'mongoose'
const schema = mongoose.Schema({
  accusedName: {
    type: String,
    required: true,
  },
  suspectName: {
    type: String,
    required: true,
  },
  accusedCity: {
    type: String,
    required: true,
  },
  suspectCity: {
    type: String,
    required: true,
  },
  accusedReport: {
    type: String,
    required: true,
  },
  reportAccepted: {
    type: Boolean,
  },
  heroId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
}, { timestamps: true })

const Report = mongoose.model('Reports', schema);
export default Report;