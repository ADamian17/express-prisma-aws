import express from 'express';
const router = express.Router();

import { index } from '../controllers/user.js';

router.get('/', index);

export { router as userRoutes };
