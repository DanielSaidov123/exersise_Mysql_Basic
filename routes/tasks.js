import express from "express";
import { GetAllTasks } from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(GetAllTasks);

export default router;
