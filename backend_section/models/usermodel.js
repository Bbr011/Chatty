import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minimum: 6,
    },

    sex: {
        type: String,
        required: true,
        enum:["male", "female"], 
    },

    profilepic: {
        type: String,
        default: "",
    }
});

const Usermodel = mongoose.model("User", userschema);

export default Usermodel;