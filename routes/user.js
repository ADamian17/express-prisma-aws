import express from 'express';
const router = express.Router();

import { index, show, create, update, destroy } from '../controllers/user.js';

router.get('/', index);
router.get('/:id', show);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', destroy);

export { router as userRoutes };
