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


export const CreateTasks = async (req, res) => {
  try {
     const { title, description, status, priority } = req.body;
     if(!title){
         res.status(401).json({error:'you not enter title '});
         return 
      };
    
    Task.QueryCreateAll(req,{ title, description, status, priority } )
    res.status(201).json({createt:'createt'})


  } catch (err) {
    console.error("Error receiving tasks:", err);
    res.status(500).json({
      success: false,
      message: "Error receiving tasks:",
      error: err.message,
    });
  }
};