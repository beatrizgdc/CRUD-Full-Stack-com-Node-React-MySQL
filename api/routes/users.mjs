import express from 'express';
import { getUsers } from '../controllers/user.mjs';

const router = express.Router();

// Define a rota para obter usuários
router.get('/', getUsers);

export default router;
