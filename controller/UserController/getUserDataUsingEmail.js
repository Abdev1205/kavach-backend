// Import the User model (assuming it's a Mongoose model)
import User from '../../models/user.js';

const getUserDataUsingEmail = async (req, res) => {
  // finally we have made thiygh token based
  try {
    console.log("Api called")
    const email = req.query.email; // Use req.query to get query parameters
    // Assuming your User model has an 'email' attribute
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found', email });
    }

    // Return the user data
    res.json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default getUserDataUsingEmail;
