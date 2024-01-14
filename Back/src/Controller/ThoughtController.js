const ControllerBase = require('./ControllerBase.js');
const Service = require('../Services/ThoughtService.js');
const service = new Service();

class ThoughtController extends ControllerBase
{
    constructor()
    {
        super(service);
    }
}

module.exports = ThoughtController;