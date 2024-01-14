class ControllerBase
{
    constructor(entity)
    {
        this.Entity = entity;
    }
    async GetAll(req,res)
    {
        const thought = await this.Entity.GetAll();
        res.status(200).json(thought);
    }

    async GetId(req,res)
    {
        const id = req.params.id;
        const thought = await this.Entity.GetId(id);
        res.status(200).json(thought);
    }
    async Post(req,res)
    {
        const Newthought = req.body;
        const thought = await this.Entity.Post(Newthought);
        res.status(201).json({message: 'Pensamento Criado', Thought: thought});
    }

    async Put(req,res)
    {
        const id = req.params.id;
        const Newthought = req.body;
        await this.Entity.Put(Number(id),Newthought);
        res.status(201).json({message: 'Pensamento Atualizado'});
    }

    async Delete(req,res)
    {
        const id = req.params.id;
        await this.Entity.Delete(Number(id));
        res.status(201).json({message: 'Pensamento Esquecido 🥹'});
    }
}

module.exports = ControllerBase;