
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
    console.log('mongoDb is connected');
}).catch(err => {
    console.log(err);

})
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on  localhost:${PORT}`);
});