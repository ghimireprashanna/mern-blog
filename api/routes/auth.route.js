import express from 'express';
import { signup, signin, google } from '../controllers/auth.controller.js';

const router = express.Router();

// Example: signup route
router.post('/signup', signup);

// Example: Login route
router.post('/signin', signin);


router.post('/google', google);


export default router;