import express from "express";
import { LogIn, OAuthLoing, SignUp } from "../controller/controller.signup.js";
const router=express.Router();
router.post("/sign",SignUp)
router.post("/login",LogIn);
router.post('/auth',OAuthLoing)
export default router