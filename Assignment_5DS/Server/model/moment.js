//import dependencies
const mongoose = require('mongoose');

//create schema
const schema = mongoose.Schema;

//define the field of collection
const momentSchema = new schema({
    "title": {
        type: String,
        required: true
    },
    "tag": {
        type: String,
        required: true
    },
    "username": {
        type: String,
    },
    "image": {
        type: String
    },
    "createdAt": {
        type: Date,
        default: Date.now
    }

});


//create and export the model:  modelname, schema, collection name
module.exports = mongoose.model("momentModel",momentSchema,"Products");