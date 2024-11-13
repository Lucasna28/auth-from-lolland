import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

export default function verifyToken(req: Request, res: Response) {
    // curl -X POST http://localhost:3000/verifyToken -H "Content-Type: application/json" -d '{"accessToken": "<your_generated_token>"}'

    const { accessToken } = req.body;

    if (!accessToken) res.status(400).json({ error: "Access token is required" });

    try {
        const decoded = jwt.verify(accessToken, SECRET_KEY);
        res.json({ valid: true, decoded });
    } catch (err) {
        res.status(401).json({ valid: false, error: err });
    }
}
