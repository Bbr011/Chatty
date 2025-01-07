import Convo from "../models/convomodel.js";
import Msg from "../models/msgmodel.js";

export const sendmessage = async (req, res) => {
    try{
        const {message} = req.body;
        const {id: receiverID} = req.params;
        const senderID = req.user._id;

        let conversation = await Convo.findOne({
            members: {
                $all: [senderID, receiverID]
            }
        })

        if (!conversation) {
            conversation = await Convo.create({
                members: [senderID, receiverID],
            });
        }

        const newmsg = new Msg({
            senderID,
            receiverID,
            message,
        });

        if(newmsg){
            conversation.messages.push(newmsg._id);
        }

        //socketio

        await Promise.all([conversation.save(), newmsg.save()]);        //save the conversation and append new message to the conversation

        res.status(201).json(newmsg);

    }catch(error){
        console.log("Can't send message", error);
        res.status(500).json({error:"somthing went wrong"});
    }
};

export const getmessages = async (req, res) => {
    try{
        const {id: usertochatID} = req.params;
        const senderID = req.user._id;

        const conversation = await Convo.findOne({
            members: {
                $all: [senderID, usertochatID]
            }
        }).populate("messages");

        if(!conversation){
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.messages);
    }catch(error){
        console.log("Can't get message", error);
        res.status(500).json({error:"somthing went wrong"});
    }
};