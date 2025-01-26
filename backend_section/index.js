import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authiroutes from './routes/authi.routes.js';
import msgroutes from './routes/msg.routes.js';
import userroutes from './routes/user.routes.js';
import connection from './db/connection.js';
import { application, server } from './socket/socket.js';



const PORT = process.env.PORT || 5000;

dotenv.config();

application.use(express.json());
application.use(cookieParser());

server.listen(PORT, () => {
    connection();
    console.log(`running on port ${PORT}`);
});

//application.get("/", (req, res) => {
//    res.send("Hello world");    // localhost:PORT
//});


application.use("/api/authi", authiroutes);
application.use("/api/messages", msgroutes);
application.use("/api/users", userroutes);