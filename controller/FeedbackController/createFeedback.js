import Feedback from "../../models/Feedback.js";

export const createFeedback = async (req, res) => {
  var userId=req.id;

  try {
    const {
      userName,
      userAge,
      userFeedback,
      hero,
      rating
    } = req.body;

    await Feedback.create({
        userName,
        userAge,
        userFeedback,
        hero,
        rating,
        userId
    });
    
    res.status(201).json({
      success: true,
      message: "Feedback Added Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
