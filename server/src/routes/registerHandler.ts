// registerHandler.ts
import { Request, Response } from "express";
import getUserByUsername from "../mySql/getUserByUsername";
import insertUser from "../mySql/insertUser";
import generateAccessToken from "../jwt/generateAccessToken";

// curl -X POST http://localhost:3000/registre -H "Content-Type: application/json" -d '{"username": "yourUsername", "password": "yourPassword"}'

export default async function registerHandler(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username) res.status(400).json({ error: "Username is required" });
  if (!password) res.status(400).json({ error: "Password is required" });

  try {
    const existingUser = await getUserByUsername(username);
    if (Array.isArray(existingUser) && existingUser.length > 0) {
      res.status(409).json({ error: "Username already exists" });
    }

    const userId = await insertUser(username, password);
    const payload = { userId };

    const accessToken = generateAccessToken(payload);

    console.log("User created successfully");
    res.status(201).json({ accessToken, message: "User created successfully" });
  } catch (error) {
    console.error("Error in registration process:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
