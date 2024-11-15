import mysql from "mysql2/promise";

export default async function sqlInit() {
  const reset = true;

  try {
    console.log(
      process.env.MYSQL_USER,
      process.env.MYSQL_PASSWORD,
      process.env.MYSQL_DATABASE,
    );

    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    console.log("Successfully started SQL connection");

    if (reset) {
      await connection.execute(`
            DROP TABLE IF EXISTS users;
        `);
    }

    await connection.execute(`
            CREATE TABLE users (
                username VARCHAR(50) NOT NULL,
                password VARCHAR(255) NOT NULL,
                userId VARCHAR(255) NOT NULL
            );
        `);

    console.log("Users table created successfully");

    await connection.end();
  } catch (error) {
    console.error("Error starting SQL connection:");
  }
}
