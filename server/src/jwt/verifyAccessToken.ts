import jwt from "jsonwebtoken";

export default function verifyAccessToken(token: string): any {
  const SECRET_KEY = process.env.SECRET_KEY;

  if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables.");
  }

  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("Invalid token");
  }
}
