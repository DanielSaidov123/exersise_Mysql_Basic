import express from "express";
import { CreateTasks, GetAllTasks, GetByID, UpdateTasks } from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(GetAllTasks).post(CreateTasks)
router.route("/:id").get(GetByID).put(UpdateTasks)


export default router;
