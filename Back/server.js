const app = require('./src/app-express.js');
const PORT = 3000;

app.listen(PORT,() =>
{
    console.log('Servidor Criado');
});