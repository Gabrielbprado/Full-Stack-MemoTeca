const datasource = require('../models');
const { Op } = require('sequelize');


class Service
{
    constructor(NameModel)
    {
        this.Model = NameModel;
    }


    async GetAll(page,limit,query)
    {
        if(query.length > 2)
        {
            return datasource[this.Model].findAll(
                {
                    where: {
                        [Op.or]: [

                        
                            { author : {[Op.like] : `%${query}%`} },
                            { thought : {[Op.like] : `%${query}%`} },
                            { thought : {[Op.like] : `%${query}%`} },
                            { customModel : {[Op.like] : `%${query}%`} }
                        ]},
                    
                    offset: Number((page * limit) - limit),
                    limit: limit
                }
            );
        }else
        {
            
            return datasource[this.Model].findAll(
                {
                    
                    offset: Number((page * limit) - limit),
                    limit: limit
                }
            );

        }

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

    async GetAllFavoriteThought(page,limit,query)
    {
        if(query.length < 2)
        {
            return datasource[this.Model].findAll(
                {
                    where:
                    {
                        favorite: true
                    },
                    offset: Number((page * limit) - limit),
                    limit: limit
                }
            );
        }else
        {
            return datasource[this.Model].findAll(
                {
                    where:
                {
                    [Op.or]:[ 
                        { author : {[Op.like] : `%${query}%`} },
                        { thought : {[Op.like] : `%${query}%`} },
                        { thought : {[Op.like] : `%${query}%`} },
                        { customModel : {[Op.like] : `%${query}%`} } 
                    ],
                    favorite: true
                },
                    offset: Number((page * limit) - limit),
                    limit: limit
                }
            );
        }
    }
}

module.exports = Service;