import mongoose from 'mongoose';


const convoschema = new mongoose.Schema({
    members:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usermodel",
        }
    ],
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Msg",
            default: [],
        }
    ],
}, {timestamps: true});

const Convo = mongoose.model("Convo", convoschema);
export default Convo;