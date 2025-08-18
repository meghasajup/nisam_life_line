import express from "express";
import logger from 'morgan'
import { connectDb } from "./config/databse.js";
import v1Router from "./routes/index.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express()
app.use(cors({
  origin: ['https://nisam-lifeline-admin.vercel.app/login','https://nisam-life-line.vercel.app'],
  credentials: true
}));

app.use(logger('dev'));
app.use(express.json())
app.use(cookieParser());
connectDb()

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1', v1Router)

app.listen(3000, () => {
  console.log("server is running on port 3000")
})