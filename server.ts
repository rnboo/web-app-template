import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './database/connection';
import Book from './src/models/Book'; // example schema

// Load environment variables
dotenv.config();

// Establish Database connection
connectDB();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for development
app.use(morgan('dev')); // Log HTTP requests
app.use(express.json()); // Parse JSON body data

// Routes (example with book schema)
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

// Error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
