
const PirateController = require('../controllers/pirate.controller');
const { Pirate } = require('../models/pirate.model')

module.exports = function(app){
    app.get('/api', PirateController.index);
    app.get('/api/pirate', PirateController.allPirates)
    app.post('/api/pirate', PirateController.addPirate);
    app.get('/api/pirate/:id', PirateController.onePirate);
    app.delete('/api/pirate/:id', PirateController.deletePirate);
}