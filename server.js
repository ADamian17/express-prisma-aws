/* NOTE External Modules */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

/* NOTE Internal Modules */
import { user } from './routes/index.js';

/* NOTE Instanced app */
dotenv.config();
const app = express();

/* NOTE PORT */
const PORT = process.env.PORT || 3002;

/* SECTION configuration */
/* NOTE Cors */
app.use(cors());

/* SECTION middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* NOTE routes */
app.get('/', (req, res) => res.send('Welcome to Express Sql'));

app.use('/api/v1/user', user);

/* NOTE Server listing */
app.listen(PORT, () =>
  console.log(
    '\x1b[35m%s\x1b[0m',
    `listing at port: ${PORT}... \nhttp://localhost:${PORT}`
  )
);
