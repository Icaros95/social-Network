import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users';
import postRoutes from './routes/posts';
import likesRoutes from './routes/likes';
import commentRoutes from './routes/comments';
import authRoutes from './routes/auth';
import cookieParser from 'cookie-parser';

const app = express();
// middleware
app.use((req, res, next) => {
    res.header({'Access-Control-Allow-Credentials': true});
    next();
})
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/likes', likesRoutes);
app.use('/api/comments', commentRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
})