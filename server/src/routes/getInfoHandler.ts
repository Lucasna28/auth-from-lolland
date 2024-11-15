import { Request, Response } from "express";
import getUserById from "../mySql/getUserById";
import verifyAccessToken from "../jwt/verifyAccessToken";

// curl -X POST http://localhost:3000/verifyToken -H "Content-Type: application/json" -d '{"accessToken": "<your_generated_token>"}'

export default async function getInfoHandler(req: Request, res: Response) {
  const { accessToken } = req.body;

  if (!accessToken) res.status(400).json({ error: "Access token is required" });

  try {
    const decoded: any = verifyAccessToken(accessToken);
    const userId = decoded.userId;

    const rows = await getUserById(userId);

    if (Array.isArray(rows) && rows.length > 0) {
      const userInfo = rows[0];
      res.json({ valid: true, userInfo });
    } else {
      res.status(404).json({ valid: false, error: "User not found" });
    }
  } catch (err) {
    res.status(401).json({ valid: false, error: "Invalid token" });
  }
}
