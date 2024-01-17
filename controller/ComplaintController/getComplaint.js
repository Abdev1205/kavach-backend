import Complaint from "../../models/complaint.js";

export const getComplaint = async (req, res) => {
  try {
    const totalComps = await Complaint.find({}).sort({ timestamps: -1 });

    if (!totalComps) {
      res.status(404).json({
        success: false,
        message: "No firs found",
      });
    } else {
      res.status(200).json({
        success: true,
        totalComps,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getComplaintOld = async (req, res) => {
  try {
    const totalComps = await Complaint.find({}).sort({ timestamps: 1 });

    if (!totalComps) {
      res.status(404).json({
        success: false,
        message: "No firs found",
      });
    } else {
      res.status(200).json({
        success: true,
        totalComps,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
