import express from 'express';
import { login, signup } from '../controllers/user.js'; 
import Validate from '../services/validation/joiValidate.js';
import joiSchema from '../services/validation/joiSchema.js';
const router = express.Router(); 

router.post('/login', login);  
router.post('/signup',Validate(joiSchema.userRegister), signup);

export default router;