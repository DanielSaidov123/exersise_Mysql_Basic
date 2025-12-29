import express from "express";
import { CreateTasks, GetAllTasks } from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(GetAllTasks).post(CreateTasks)

export default router;
