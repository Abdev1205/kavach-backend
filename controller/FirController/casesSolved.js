import Fir from "../../models/fir.js";

export const casesSolvedCounter = async (req, res) => {
  try {
    const total = (await Fir.countDocuments({ Stages: "Solved" })) || 0;
    const currentDate = new Date();
    const lastWeekStartDate = new Date(currentDate);
    lastWeekStartDate.setDate(currentDate.getDate() - currentDate.getDay() - 6);
    const lastWeekCount = await Fir.countDocuments({
      createdAt: { $gte: lastWeekStartDate, $lt: currentDate },
    });

    const currentWeekCount = await Fir.countDocuments(
      {
        createdAt: {
          $gte: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - currentDate.getDay()
          ),
          $lt: currentDate,
        },
      },
      { Stages: "Solved" }
    );

    const solvedCasesRate =
      ((currentWeekCount - lastWeekCount) / lastWeekCount) * 100 || 0;

    res.status(200).json({
      success: true,
      total,
      solvedCasesRate,
    });
  } catch (error) {
    console.log(error);
  }
};