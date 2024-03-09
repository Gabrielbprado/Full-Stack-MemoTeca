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
    
    async FavoriteThought(req,res)
    {
        try
        {
            const favorite = req.body.favorite;
            const thought  = await service.GetId(req.params.id);
            thought.favorite = favorite;
            await thought.save();
            res.status(201).json({message: 'Pensamento Favoritado'});
        } catch (error)
        {
            res.status(400).json({message: 'Erro ao favoritar pensamento'});
        }


    }

    async GetFavoriteThought(req,res)
    {
        const { page = 1 } = req.query;
        const { query = ''} = req.query;
        const limit = 6;

        const thought = await service.GetAllFavoriteThought(page,limit,query);
        res.status(200).json(thought);
    }
}

module.exports = ThoughtController;