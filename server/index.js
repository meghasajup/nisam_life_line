import express from "express";
import logger from 'morgan'
import { connectDb } from "./config/databse.js";
import v1Router from "./routes/index.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express()
app.use(cors({
  origin: [
    'https://nisam-lifeline-admin.vercel.app',
    'https://nisam-life-line.vercel.app',
    'http://localhost:5173',
    'http://localhost:5174'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Cookie', 'Set-Cookie'],
  exposedHeaders: ['Set-Cookie']
}));

app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'] || '';
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  
  if (isIOS) {
    // For iOS, handle cookies differently
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  }
  next();
});



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