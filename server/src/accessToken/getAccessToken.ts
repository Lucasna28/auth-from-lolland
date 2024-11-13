import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

export default function getAccessToken(req: Request, res: Response) {
    // curl -X POST http://localhost:3000/getAccessToken -H "Content-Type: application/json" -d '{"username": "exampleUser", "expires": 60}'

    const { username, expires } = req.body;

    if (!username) res.status(400).json({ error: "Username is required" });
    if (!expires) res.status(400).json({ error: "Expires is required" });

    const payload = { username: username };
    try {
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: expires });
        res.json({ accessToken: token });
    } catch (err: any) {
        res.status(401).json({ valid: false, error: err });
    }
}
