import express from 'express';
import { signup, login } from '../controllers/auth.controller.js';

const router = express.Router();

// Example: signup route
router.post('/signup', signup);

// Example: Login route
router.post('/login', login);

export default router;