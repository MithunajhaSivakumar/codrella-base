import express from 'express';
const router = express.Router();
import auth from '../services/middleware/sessionValidation.js'
import { createClass, joinClass } from '../controllers/course.js';

router.post('/createClass', auth, createClass);
router.post('/joinClass', auth, joinClass);

export default router;