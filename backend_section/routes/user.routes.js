import express from 'express';
import routeprotector from '../Mware/routeprotector.js';
import { getusers } from '../functions/user.functions.js';

const router = express.Router();

router.get("/", routeprotector, getusers);

export default router;