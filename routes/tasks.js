import express from "express";
import { CreateTasks, DeleteTaskById, GetAllTasks, GetByID, UpdateTasks } from "../controllers/tasks.js";

const router = express.Router();

router.route("/").get(GetAllTasks).post(CreateTasks)
router.route("/:id").get(GetByID).put(UpdateTasks).delete(DeleteTaskById)


export default router;
