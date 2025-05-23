
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
    console.log('mongoDb is connected');
}).catch(err => {
    console.log(err);

})
const app = express();

app.use(express.json())
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on  localhost:${PORT}`);
});