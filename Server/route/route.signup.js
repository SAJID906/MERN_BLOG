import express from "express";
import { LogIn, SignUp } from "../controller/controller.signup.js";
const router=express.Router();
router.post("/sign",SignUp)
router.post("/login",LogIn)
export default router