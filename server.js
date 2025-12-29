import express from "express";
import { getConn, initDb } from "./utils/db.js";
import tasks from "./routes/tasks.js";

const app = express();
const PORT = process.env.PORT || 8001;

// Body parser
app.use(express.json());

// Attaches db connection to req object
app.use(async (req, res, next) => {
  req.dbConn = await getConn();
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

 

// 🏠 בדיקת שרת
app.get("/", (req, res) => {
  res.json({
    message: "שלום! ברוכים הבאים ל-API של ניהול משימות",
    endpoints: {
      "GET /tasks": "קבלת כל המשימות",
      "GET /tasks/:id": "קבלת משימה לפי ID",
      "POST /tasks": "יצירת משימה חדשה",
      "PUT /tasks/:id": "עדכון משימה",
      "DELETE /tasks/:id": "מחיקת משימה",
    },
  });
});

app.use("/tasks", tasks);

app.listen(PORT, async () => {
  await initDb();
  console.log(`Server is running on port ${PORT}...`);
});
