import mysql from "mysql2/promise";

export default async function checkMySQLConnection(retries = 5, delay = 3000) {
  while (retries > 0) {
    try {
      const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
      console.log("Connected to MySQL successfully.");
      await connection.end();
      return true;
    } catch (error) {
      retries -= 1;
      console.log(
        `MySQL connection failed. Retrying in ${delay / 1000} seconds...`,
      );
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  throw new Error("Unable to connect to MySQL after multiple retries.");
}
