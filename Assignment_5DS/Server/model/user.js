//import dependencies
const mongoose = require('mongoose');

//create schema
const schema = mongoose.Schema;

//define the field of collection
const userSchema = new schema({
    "fname": {
        type: String,
        required: true
    },
    "lname": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true,
    },
    "phonNum": {
        type: String,
        required: true
    },
    "address": {
        type: String
    },
    "city": {
        type: String
    },
    "image": {
        type: String
    },
    "hashedPassword": {
        type: String,
        required: true
    },
    "createdAt": {
        type: Date,
        default: Date.now
    }

});


//create and export the model:  modelname, schema, collection name
module.exports = mongoose.model("UserModel",userSchema,"UserData");