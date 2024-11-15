import pool from "./dbPool";

export default async function getUserIdByUsernameAndPassword(
  username: string,
  password: string,
) {
  const connection = await pool.getConnection();
  try {
    const [rows]: any = await connection.execute(
      "SELECT userId FROM users WHERE username = ? AND password = ?",
      [username, password],
    );
    return rows;
  } finally {
    connection.release();
  }
}
