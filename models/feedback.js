import mongoose from 'mongoose';

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
  accusedFeedback: {
    type: String,
    required: true,
  },
  hero: {
    type: String,
  },
  firId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Firs',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },
}, { timestamps: true });

const Feedback = mongoose.model('Feedbacks', schema);
export default Feedback;
