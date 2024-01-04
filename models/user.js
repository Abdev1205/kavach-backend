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
    required: true
  },
  role: {
    type: String,
    required: true
  },
  googleId: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("Users", schema);
export default User;
