import jwt from "jsonwebtoken";

export default function generateAccessToken(payload: object): string {
  const SECRET_KEY = process.env.SECRET_KEY;
  if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables.");
  }
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1hr" });
}
