import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// Example: Get all users
router.get('/test', test);



export default router;