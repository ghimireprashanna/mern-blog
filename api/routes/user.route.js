import express from 'express';
import { test, UpdateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// Example: Get all users
router.get('/test', test);
router.put('/update/:userId',verifyToken, UpdateUser);



export default router;