import Usermodel from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import generateTokens from "../tools/generatetokens.js";


export const login = async(req, res) => {
    res.send("login user");
}

export const logout = async(req, res) => {
    res.send("logout user");
}

export const register = async(req, res) => {
    try{
        const {name, username, password, confirmpassword, sex} = req.body; //user blueprint

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