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
}

module.exports = ControllerBase;