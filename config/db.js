import mysql from "mysql2/promise";

export async function initDb() {
  const initConnection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
  });

  const CREATE_DB_QUERY = `CREATE DATABASE IF NOT EXISTS tasks_db;`;

  const USE_DB_QUERY = "USE tasks_db;";

  const CREATE_TABLE_QUERY = `
      CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
        priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;

  await initConnection.query(CREATE_DB_QUERY);
  await initConnection.query(USE_DB_QUERY);
  await initConnection.query(CREATE_TABLE_QUERY);

  await initConnection.end();
}
let conn = null;

export async function getConn() {
  if (conn) return conn;
  else {
    const dbConnection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      port: 3306,
      database: "tasks_db",
    });
    return dbConnection;
  }
}