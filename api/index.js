
import express from 'express';
import http from 'http';
import userRoutes from './routes/userRoutes.mjs';

const app = express();
const server = http.createServer(app);

// Configura o Express para interpretar JSON
app.use(express.json());

// Define a rota raiz (opcional)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Usa o roteador de usuários para a rota /api/users
app.use('/api/users', userRoutes);

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});