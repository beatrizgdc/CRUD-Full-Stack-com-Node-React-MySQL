
import express from 'express';
import http from 'http';
import userRoutes from './routes/users.mjs';

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use('/api/routes', userRoutes);
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

server.listen();