import dotenv from 'dotenv';
import express from 'express';
import {PORT} from './constants';
import {pool} from './db';
// Load environment variables from .env file
dotenv.config();

const app = express();



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}
)

