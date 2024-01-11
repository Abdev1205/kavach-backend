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
<<<<<<< HEAD
  stages: {
=======
  stages: {
>>>>>>> 3819abef10b8d706271e6b909dbd54efefff0eab
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
}, { timestamps: true })

const Fir = mongoose.model('Firs', schema);
export default Fir;