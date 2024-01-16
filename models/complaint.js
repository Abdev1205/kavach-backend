import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    informantName: {
      type: String,
    },
    phoneno: {
      type: String,
    },
    suspectName: {
      type: String,
    },
    informantAge: {
      type: Number,
    },
    suspectAge: {
      type: Number,
    },
    informantCity: {
      type: String,
    },
    informantComplaint: {
      type: String,
      required: true,
    },
    informantReply: {
        type: String
    },
    policeReply: {
        type: String
    },
    stages: {
      type: String,
      required: true,
    },
    hero: {
      type: String,
    },
    feedbackId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feedbacks",
    },
    heroId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const Complaint = mongoose.model("Complaints", schema);
export default Complaint;
