require('../models/danger');
const mongoose = require('mongoose'),
    Danger = mongoose.model('Danger');

module.exports = {
    index: (req,res) => {
        Danger.find()
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    show: (req,res) => {
        Danger.findById(req.params.id)
            .then(result => res.json({results:result}))
            .catch(err => res.json({errors:err.errors}));
    },
    create: (req,res) => {
        Danger.create(req.body)
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    update: (req,res) => {
        Danger.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators:true, useFindAndModify: false})
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    destroy: (req,res) => {
        Danger.deleteOne({_id:req.params.id})
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    }
}