// routes/events.ts
import express, { Router, Request, Response } from 'express';
import getEvents from '../controllers/events';

const router: Router = express.Router();
router.get('/', getEvents);
export default router;
