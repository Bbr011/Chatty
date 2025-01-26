import { Server } from "socket.io";
import http from "http";
import express from "express";

const application = express();

const server = http.createServer(application);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"]
    }
});

export const recieversocketid = (recieverID) => {
    return useSocketmap[recieverID];
}

const useSocketmap = {};

//even listener
io.on("connection", (socket) => {
    console.log("a user connected");

    const userid = socket.handshake.query.userid;
    if(userid != "undefined") {
        useSocketmap[userid] = socket.id;
    }
    io.emit("onlineusers", Object.keys(useSocketmap));

    socket.on("disconnect", () => {
        console.log("user disconnected");
        delete useSocketmap[userid];
        io.emit("onlineusers", Object.keys(useSocketmap));
    });
})

export {application, server, io};