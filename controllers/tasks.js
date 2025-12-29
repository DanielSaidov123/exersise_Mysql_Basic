import Task from "../models/taskModel.js";
export const GetAllTasks = async (req, res) => {
  try {
    const tasks = await Task.QueryGetAll(req);
    res.json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (err) {
    console.error("Error receiving tasks:", err);
    res.status(500).json({
      success: false,
      message: "Error receiving tasks:",
      error: err.message,
    });
  }
};
