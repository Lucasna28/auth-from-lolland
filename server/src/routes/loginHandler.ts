import { Request, Response } from "express";
import getUserIdByUsernameAndPassword from "../mySql/getUserIdByUsernameAndPassword";
import generateAccessToken from "../jwt/generateAccessToken";

// curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "yourUsername", "password": "yourPassword"}'

export default async function loginHandler(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username) res.status(400).json({ error: "Username is required" });
  if (!password) res.status(400).json({ error: "Password is required" });

  try {
    const rows = await getUserIdByUsernameAndPassword(username, password);

    if (!Array.isArray(rows) || rows.length === 0) {
      res.status(401).json({ error: "Invalid username or password" });
    }

    const userId = rows[0].userId;
    const payload = { userId };

    const accessToken = generateAccessToken(payload);

    console.log("Logged in successfully");
    res.status(201).json({ accessToken, message: "Logged in successfully" });
  } catch (error) {
    console.error("Error in login process:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
