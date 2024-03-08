const ControllerBase = require('./ControllerBase.js');
const Service = require('../Services/ThoughtService.js');
const service = new Service();


class ThoughtController extends ControllerBase
{
    constructor()
    {
        super(service);
    }

    async GetAllThought(req,res)
    {
        const { page = 1 } = req.query;
        const { query = ''} = req.query;
        //console.log(page);

        // Limite de registros em cada página
        const limit = 6;

        // Variável com o número da última página
        

        // Contar a quantidade de registro no banco de dados
        
        

        const thought = await service.GetAll(page,limit,query);
        res.status(200).json(thought);

        
    }
    
}

module.exports = ThoughtController;