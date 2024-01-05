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
  accusedStages: {
    type: String,
    required: true,
  },
  hero: {
    type: String
  }
})

const Fir = mongoose.model('Fir', schema);
export default Fir;