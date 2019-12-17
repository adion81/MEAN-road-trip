require('dotenv').config();

const mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    uri = process.env.PASS;


mongoose.connect(`mongodb+srv://Adrien:${uri}@mean-projects-tojvq.mongodb.net/test?retryWrites=true&w=majority/road-trip`, {useNewUrlParser:true, useUnifiedTopology: true})

// mongoose.connect('mongodb://localhost/road-trip',{ useNewUrlParser:true, useUnifiedTopology:true })

// create a variable that points to the models folder
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
})