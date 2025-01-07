import jwt from 'jsonwebtoken';
import Usermosel from '../models/usermodel.js';

const routeprotector = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({error: "Unauthorized"});
        }

        const verify = jwt.verify(token, process.env.JWT_SECRET);
        if(!verify) {
            return res.status(401).json({error: "Unauthorized | token not verified"});
        }

        const user = await Usermosel.findById(verify.userId);
        if(!user) {
            return res.status(404).json({error: "not found"});
        }

        req.user = user;

        next();
    }
    catch (error) {
        console.log("middleware security compromised", error.message);
        res.status(500).json({error: "somthing went wrong"});
    }
};

export default routeprotector;