import Feedback from "../../models/Feedback.js";

export const createFeedback = async (req, res) => {
  try {
    const {
      userName,
      userAge,
      userReport,
      userFeedback,
      hero,
      rating
    } = req.body;

    await Feedback.create({
        userName,
        userAge,
        userReport,
        userFeedback,
        hero,
        rating
    });
    
    res.status(201).json({
      success: true,
      message: "Feedback Added Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
