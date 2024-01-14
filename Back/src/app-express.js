const Express = require('express');
const route = require('./Routes/Index.js');
const app = Express();
route(app);

app.get('/',(req,res) =>
{
    res.status(200).send('Server Criado');
});

module.exports = app;