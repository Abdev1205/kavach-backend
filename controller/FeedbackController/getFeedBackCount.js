import Feedback from "../../models/Feedback.js";

export const getFeedbackCount = async (req, res) => {
    try {
        const currentDate = new Date();
        const totalFeedbackCount = await Feedback.countDocuments();
        const lastWeekStartDate = new Date(currentDate);
        lastWeekStartDate.setDate(currentDate.getDate() - currentDate.getDay() - 6);

        const lastWeekCount = await Feedback.countDocuments({
            createdAt: { $gte: lastWeekStartDate, $lt: currentDate }
        });

        const currentWeekCount = await Feedback.countDocuments({
            createdAt: { $gte: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay()), $lt: currentDate }
        });

        const feedbackRate = (currentWeekCount - lastWeekCount) / lastWeekCount * 100 || 0;
        
        res.json({
            feedbackRate,
            totalFeedbackCount
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
