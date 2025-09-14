import express from "express";
import logger from "morgan";
import { connectDb } from "./config/databse.js";
import v1Router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
  origin: [
    'https://nisam-lifeline-admin.vercel.app',
    'https://nisam-life-line.vercel.app',
    //'http://localhost:5173',
    //'http://localhost:5174'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());

connectDb();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1", v1Router);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
