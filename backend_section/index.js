import express from 'express';
import dotenv from 'dotenv';
import authiroutes from './routes/authi.routes.js';
import connection from './db/connection.js';


const PORT = process.env.PORT || 5000;
const application = express();

dotenv.config();
application.use(express.json());

application.listen(PORT, () => {
    connection();
    console.log(`running on port ${PORT}`);
});

//application.get("/", (req, res) => {
//    res.send("Hello world");    // localhost:PORT
//});


application.use("/api/authi", authiroutes);