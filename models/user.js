import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg"
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
  available: {
    type: Boolean
  },
  firId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Firs',
  },
}, { timestamps: true });

const User = mongoose.model("Users", schema);

export default User;

