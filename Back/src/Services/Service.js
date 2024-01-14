const datasource = require('../models');

class Service
{
    constructor(NameModel)
    {
        this.Model = NameModel;
    }
    async GetAll()
    {
        datasource[this.Model].findAll();
    }
}

module.exports = Service;