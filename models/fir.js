import mongoose from 'mongoose'
const schema = mongoose.Schema({
  accusedName: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
  },
  suspectName: {
    type: String,
    required: true,
  },
  accusedAge: {
    type: Number,
    required: true,
  },
  suspectAge: {
    type: Number,
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

  stages: {
    type: String,
    required: true,
  },
  hero: {
    type: String
  },
  feedbackId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feedbacks',
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

const Fir = mongoose.model('Firs', schema);
export default Fir;