import pool from "./dbPool";

export default async function getUserByUsername(username: string) {
  const connection = await pool.getConnection();
  try {
    const [rows]: any = await connection.execute(
      "SELECT * FROM users WHERE username = ?",
      [username],
    );
    return rows;
  } finally {
    connection.release();
  }
}
