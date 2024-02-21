// controllers/events.ts
import { Request, Response } from 'express';
import Event from '../models/Event';

const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving events' });
  }
};

export default getEvents;
