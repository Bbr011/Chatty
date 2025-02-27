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
}, {timestamps: true}); //timestamps (creted_at and modified_at)

const Usermodel = mongoose.model("Usermodel", userschema);

export default Usermodel;