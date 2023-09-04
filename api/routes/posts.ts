import express from 'express';
import { getPost } from '../controllers/post';

const router = express.Router();

router.get('/', getPost);

export default router;