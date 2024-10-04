//
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

//forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json()) 

//rotas da API
const personRoutes = require('./routes/routesPerson')
app.use('/person', personRoutes)

//rota inicial
app.get('/', (req, res) => {
  
    res.json({message: 'Hello World'})
})

//entregar uma porta

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado ao banco');
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch((err) => {
        console.log('Erro ao conectar ao MongoDB:', err);
    });

