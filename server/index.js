import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectRouter from './api/routers/connect.js';

dotenv.config();

// Express
const app = express();
app.use(express.json());

// CORS
const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routers
app.use('/connect', connectRouter);

const BACKEND_PORT = process.env.BACKEND_PORT;
app.listen(BACKEND_PORT, () =>
  console.log(`Listening on port ${BACKEND_PORT}`)
);

export default app;
