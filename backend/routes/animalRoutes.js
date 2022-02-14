import express from "express";
import animalControllers, {  } from "../controllers/animalControllers.js";

const router = express.Router();

router.post("/registerAnimal",animalControllers.registerAnimal);

export default router;