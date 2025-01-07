import Usermodel from "../models/usermodel.js";

export const getusers = async (req, res) => {
    try {
        const loggedinuser = req.user._id;
        const users = await Usermodel.find({ _id: { $ne: loggedinuser } }).select("-password");     //exclude the logged in user

        res.status(200).json(users);

    } catch (error) {
        console.log("error getting the user", error.message);
        res.status(500).json({error: "somthing went wrong"});
    }
}