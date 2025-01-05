import express from 'express';
import dotenv from 'dotenv';
import authiroutes from './routes/authi.routes.js';
import connection from './db/connection.js';


const application = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

application.listen(PORT, () => {
    connection();
    console.log(`running on port ${PORT}`);
});

application.get("/", (req, res) => {
    res.send("Hello world");    // localhost:PORT
});


application.use("/api/authi", authiroutes);