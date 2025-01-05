import express from "express";
import { login, logout, register } from "../functions/authi.functions.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);


export default router;