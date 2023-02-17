const Pirate = require("../models/pirate.model")

//test route
module.exports.index = (req, res) =>{
    res.json({message:"Hello Pirate"});
}

//get all
module.exports.allPirates = (req, res) =>{
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(err => res.status(400).json(err))
}

//get one
module.exports.onePirate = (req, res) =>{
    Pirate.findOne({_id: req.params.id})
        .then(onePirate => res.json(onePirate))
        .catch(err => res.status(400).json(err))
}

//create
module.exports.addPirate = (req, res) =>{
    Pirate.create(req.body)
        .then(newPirate=> res.json(newPirate))
        .catch(err => res.status(400).json(err))
}

//delete
module.exports.deletePirate = (req, res) =>{
    Pirate.deleteOne({_id: req.params.id})
        .then(result => res.json({result}))
        .catch(err => res.status(400).json(err))
}