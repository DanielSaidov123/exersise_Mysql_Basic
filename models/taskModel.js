const QueryGetAll= async (req) => {
  const [tasks] = await req.dbConn.query('SELECT * FROM tasks ORDER BY created_at DESC');
  return tasks;
};

export default {
  QueryGetAll
};