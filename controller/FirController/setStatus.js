import User from "../../models/user.js";

export const setStatus = async (req, res) => {
    const {status} = req.body;
    const userId = req.id;
    console.log(req.id);
    const user = await User.findById(userId);
    console.log("status");
    console.log(user);
    console.log(status);
    if(!user){
        res.status(404).json({
            success: false,
            message : "No user found"
        })
    }else{
        user.available = status;
        res.status(200).json({
            success: true,
            message: "Updated Status"
        })
    }
}

const getStatus = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}