import express from "express";
import sqlInit from "./mySql/sqlInit";
import checkMySQLConnection from "./mySql/checkMySQLConnection";

import loginHandler from "./routes/loginHandler";
import registerHandler from "./routes/registerHandler";
import getInfoHandler from "./routes/getInfoHandler";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/registre", registerHandler);
app.post("/login", loginHandler);
app.post("/verifyToken", getInfoHandler);

async function startServer() {
    console.log("hello world");
    try {
        await checkMySQLConnection();
        sqlInit();
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();
