import express from "express";

import getAccessToken from "./accessToken/getAccessToken";
import verifyToken from "./accessToken/verifyToken";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/getAccessToken", getAccessToken);
app.post("/verifyToken", verifyToken);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
