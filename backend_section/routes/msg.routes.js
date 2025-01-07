import express from 'express';
import { getmessages, sendmessage } from '../functions/msg.functions.js';
import routeprotector from '../Mware/routeprotector.js';

const router = express.Router();

router.get("/:id", routeprotector, getmessages);
router.post("/send/:id", routeprotector, sendmessage);

export default router;