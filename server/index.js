import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes/route.js";
import { Connection } from "./database/db.js";

const app = express();

const PORT = 8009;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

Connection();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
