import express  from "express";
import userControllers, {  } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/registerUser", userControllers.registerUser);
 
export default router;