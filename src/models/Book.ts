// src/models/book.model.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IBook extends Document {
  title: string;
  author: string;
  publicationDate: Date;
}

const bookSchema: Schema<IBook> = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    required: true,
  },
});

const BookModel = mongoose.model<IBook>('Book', bookSchema);

export default BookModel;
