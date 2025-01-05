import Usermodel from "../models/usermodel.js";

export const login = async(req, res) => {
    res.send("login user");
}

export const register = async(req, res) => {
    try{
        const {name, username, password, confirmpassword, sex} = req.body;

        if (password !== confirmpassword){
            return res.status(400).json({message: "enter the same password"});
        }

        const user = await Usermodel.findOne({username});

        if (user){
            return res.status(400).json({message: "this username already used"});
        }

        //avatar

        const mainprofilepic = `https://avatar.iran.liara.run/username?username=${username}`;

        const newuser = new Usermodel({
            name,
            username,
            password,
            sex,
            profilepic: mainprofilepic,
        });

        await newuser.save();
        res.status(201).json({
            _id: newuser._id,
            name: newuser.name,
            username: newuser.username,
            profilepic: newuser.profilepic,
        });

    }catch(error){
        console.log("error trying to register", error.message);
        res.status(500).json({message: "something went wrong"});
    }
}

export const logout = async(req, res) => {
    res.send("logout user");
}