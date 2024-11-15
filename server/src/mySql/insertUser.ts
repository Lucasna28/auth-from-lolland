import pool from "./dbPool";
import { v4 as uuidv4 } from "uuid";

export default async function insertUser(username: string, password: string) {
  const connection = await pool.getConnection();
  const userId = uuidv4();
  try {
    await connection.execute(
      "INSERT INTO users (username, password, userId) VALUES (?, ?, ?)",
      [username, password, userId],
    );
    return userId;
  } finally {
    connection.release();
  }
}
