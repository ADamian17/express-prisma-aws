import express from 'express';
const router = express.Router();

import { index, show, create } from '../controllers/user.js';

router.get('/', index);
router.get('/:id', show);
router.post('/create', create);

export { router as userRoutes };
