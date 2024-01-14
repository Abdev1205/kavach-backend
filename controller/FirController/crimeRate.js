import Fir from '../../models/fir.js';

export const getCrimeRateCount = async (req, res) => {
    try {
        const currentDate = new Date();
        const totalFirCount = Fir.countDocuments();
        const lastWeekStartDate = new Date(currentDate);
        lastWeekStartDate.setDate(currentDate.getDate() - currentDate.getDay() - 6); // Assuming Sunday as the first day of the week

        const lastWeekCount = await Fir.countDocuments({
            createdAt: { $gte: lastWeekStartDate, $lt: currentDate }
        });

        const currentWeekCount = await Fir.countDocuments({
            createdAt: { $gte: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay()), $lt: currentDate }
        });

        const crimeRate = (currentWeekCount - lastWeekCount) / lastWeekCount * 100 || 0;
        
        const totalFir = currentWeekCount - lastWeekCount;

        res.json({
            crimeRate,
            totalFir
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
