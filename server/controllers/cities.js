require('../models/city')
const mongoose = require('mongoose'),
    City = mongoose.model("City");
module.exports = {
    index: (req, res) => {
        City.find()
            .then(result => res.json({ results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    selected: (req,res) => {
        City.find({trip: req.params.cityKey}).sort({listNumber: 1})
            .then(result => res.json({ results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req, res) => {
        City.findOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json({ errors: err.errors  }));
    },
    create: (req, res) =>{
        City.create(req.body)
            .then(result => res.json({ results: result }))
            .catch( err => res.json({errors: err.errors}));
    },
    update: (req, res) => {
        City.findOneAndUpdate({_id: req.params.id},req.body,{runValidators: true,useFindAndModify: false})
            .then(result => res.json({ results : result }))
            .catch(err => res.json({ errors: err.errors }));
    },
    destroy: (req,res) => {
        City.deleteOne({_id:req.params.id})
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }));
    }
}