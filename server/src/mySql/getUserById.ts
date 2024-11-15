import pool from "./dbPool";

export default async function getUserById(userId: string) {
  const connection = await pool.getConnection();
  try {
    const [rows]: any = await connection.execute(
      "SELECT userId, username FROM users WHERE userId = ?",
      [userId],
    );
    return rows;
  } finally {
    connection.release();
  }
}
