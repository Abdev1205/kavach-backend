import User from "../../models/user.js";

const getUserData = async (req, res, next) => {
  console.log("i am in user")
  const userId = req.id;
  console.log(userId, "user id in gert user data")
  try {
    let user = await User.findById(userId, "-password");
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { getUserData };