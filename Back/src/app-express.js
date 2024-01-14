const Express = require('express');
const app = Express();

app.get('/',(req,res) =>
{
    res.status(200).send('Server Criado');
});

module.exports = app;