const QueryGetAll = async (req) => {
  const [tasks] = await req.dbConn.query(
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return tasks;
};

const QueryCreateAll = async (req, taskData) => {
  const [tasks] = await req.dbConn.query(
    `INSERT INTO tasks (title , description ,status ,priority)
        VALUES (?,?,?,?)`,
    [
      taskData.title,
      taskData.description || null,
      taskData.status || "pending",
      taskData.priority || "medium",
    ]
  );
};

const QueryGetByID = async (req, id) => {
  const [task] = await req.dbConn.query("SELECT * FROM tasks WHERE id=?", id);
  return task[0];
};

const QueryUpdate = async (req, taskObj, taskData,id) => {
  await req.dbConn.query(
    `UPDATE tasks SET  title = ?, description = ?, status = ?, priority = ? WHERE id = ?`,
    [
      taskData.title || taskObj.title,
      taskData.description !== undefined
        ? taskData.description
        : taskObj.description,
      taskData.status || taskObj.status,
      taskData.priority || taskObj.priority,
      id,
    ]
  );
};

export default {
  QueryGetAll,
  QueryCreateAll,
  QueryGetByID,
  QueryUpdate,
};
