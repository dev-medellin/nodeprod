const Model = require('../models/quote_model');

exports.postQuote = async (req, res, next) => {
    const data = new Model({
        name: req.body.params.name,
        quote: req.body.params.quotes
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

exports.fetchAll = async (req, res, next) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};

exports.removeList = async (req, res ,next) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.json(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
};