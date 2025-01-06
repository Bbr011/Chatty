import Usermodel from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import generateTokens from "../tools/generatetokens.js";


export const login = async(req, res) => {
    try {
        const {username, password} = req.body;                                //user login blueprint
        const user = await Usermodel.findOne({username});                     //find user by username
        const isMatch = await bcrypt.compare(password, user?.password || ""); //password validation

        if (!user || !isMatch){
            return res.status(400).json({message: "invalid inputs"});
        }

        generateTokens(user._id, res);

        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            profilepic: user.profilepic
        });
    } catch(error){
        console.log("error trying to login", error.message);
        res.status(500).json({message: "something went wrong"});
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "logged out"});

    }catch(error){
        console.log("error trying to logout", error.message);
        res.status(500).json({message: "something went wrong"});
    }
}

export const register = async(req, res) => {
    try{
        const {name, username, password, confirmpassword, sex} = req.body; //user register blueprint

        if (password !== confirmpassword){
            return res.status(400).json({message: "enter the same password"});
        }

        const user = await Usermodel.findOne({username});

        if (user){
            return res.status(400).json({message: "this username already used"});
        }

        const slt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, slt); //password
        
        //avatar
        const mainprofilepic = `https://avatar.iran.liara.run/username?username=${username}`;

        const newuser = new Usermodel({
            name,
            username,
            password: hashedpassword,
            sex,
            profilepic: mainprofilepic,
        });

        if(newuser)
        {
            generateTokens(newuser._id, res);

            await newuser.save();
            res.status(201).json({
                _id: newuser._id,
                name: newuser.name,
                username: newuser.username,
                profilepic: newuser.profilepic,
            });
        } else{
            res.status(400).json({message: "something went wrong"});
        }

    }catch(error){
        console.log("error trying to register", error.message);
        res.status(500).json({message: "something went wrong"});
    }
}