import express, { Express, Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './utils/connection';
import getEvents from './routes/events'; // Routes & Routers

dotenv.config(); // Load environment variables
connectDB(); // Establish Database connection

// Create Express app
const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for development
app.use(morgan('dev')); // Log HTTP requests
app.use(express.json()); // Parse JSON body data
app.use(
  '*',
  createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^/api': '' },
  }),
);

// API Routes
app.use('/', getEvents);

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(port, () => {
  console.log(`⚡ Server is running here 👉 https://localhost:${port}`);
});
