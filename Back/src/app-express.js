const express = require('express');
const cors = require('cors');
const routes = require('./Routes/Index.js');

const app = express();

// Configurar CORS antes de aplicar as rotas
app.use(cors({
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,json',
}));

// Aplicar as rotas
routes(app);

app.get('/', (req, res) => {
    res.status(200).send('Server Criado');
});

module.exports = app;
