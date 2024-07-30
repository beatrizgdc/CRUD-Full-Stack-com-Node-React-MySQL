import express from 'express';
import http from 'http';
import userRoutes from './routes/users.mjs';

const app = express();
const server = http.createServer(app);

// Configura o Express para interpretar JSON
app.use(express.json());

// Usa o roteador de usuários
app.use('/api/routes', userRoutes);

server.listen();