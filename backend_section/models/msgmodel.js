import mongoose from "mongoose";


const msgschema = new mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usermodel",
        required: true,
    },

    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usermodel",
        required: true,
    },

    message: {
        type: String,
        required: true,
    },

}, {timestamps: true});

const Msg = mongoose.model("Message", msgschema);
export default Msg;