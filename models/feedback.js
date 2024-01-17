import mongoose from 'mongoose';

const schema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true
  },
  userReport: {
    type: String,
  },
  userFeedback: {
    type: String,
    required: true,
  },
  hero: {
    type: String,
  },
  rating: {
    type: Number,
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
