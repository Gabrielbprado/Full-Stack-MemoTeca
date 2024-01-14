const datasource = require('../models');

class Service
{
    constructor(NameModel)
    {
        this.Model = NameModel;
    }
    async GetAll()
    {
        return datasource[this.Model].findAll();
    }

    async GetId(id)
    {
        return datasource[this.Model].findByPk(id);
    }

    async Post(Newthought)
    {
        return datasource[this.Model].create(Newthought);
    }

    async Put(id,newThought)
    {
        return datasource[this.Model].update(newThought,
            {
                where: 
                {
                    id: id
                }
            });
    }

    async Delete(id)
    {
        return  datasource[this.Model].destroy(
            {
                where:
                {
                    id: id
                }
            }
        );
    }
}

module.exports = Service;