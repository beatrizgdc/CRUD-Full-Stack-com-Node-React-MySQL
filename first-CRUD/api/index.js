
import express from 'express';
import userRoutes from './routes/users.js';
import http from 'http';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

const server = http.createServer(app);
server.listen(8084);