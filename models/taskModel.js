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

export default {
  QueryGetAll,
  QueryCreateAll,
};
