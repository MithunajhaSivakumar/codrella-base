import express from 'express';
const router = express.Router();
import auth from '../services/middleware/sessionValidation.js'
import { compile } from '../controllers/code.js';

router.post('/compile', auth, compile);

export default router;