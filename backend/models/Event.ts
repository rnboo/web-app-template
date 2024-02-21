// models/Event.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IEvent extends Document {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

const eventSchema: Schema<IEvent> = new Schema<IEvent>({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    default: null,
  },
});

const EventModel = mongoose.model<IEvent>('Event', eventSchema);

export default EventModel;
