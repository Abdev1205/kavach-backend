import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  city: {
    type: String,
  },
  role: {
    type: String,
  },
  googleId: {
    type: String
  },
  feedbackId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feedbacks',
  },
  firId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Firs',
  },
}, { timestamps: true });

const User = mongoose.model("Users", schema);

export default User;

