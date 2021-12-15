const moment = require('../model/moment');
const config = require("../config");
const path = require('path');


// logic to create new moment
exports.createMoment = (req, res) => {
    const{
        title,
        tag
    } = req.body;
    const email= config.email;
    const momentObject = new moment({
        "title": title,
        "tag": tag,
        "username": email,
    });
    momentObject.save()
    .then(result => {
            res.json(result);
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    });
}

// logic to update Image data
exports.updateImage = (req, res)=> {
  const image = 'http://localhost:3400/uploads/' + req.file.filename; //set dynamically
  moment.findOneAndUpdate(
        {"_id":req.params.id},
        {
            $set: {
                    "image": image
                }
        },
        {upsert: false})
        .then(result => {
            res.status(200).json({
                message: "!!!...Image uploaded successfully...!!!"
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
}

// logic to update moment data
exports.updateMoment = (req, res)=> {
    const{
        title,
        tag,
        id
    } = req.body;
    moment.findOneAndUpdate(
        {"_id":id},
        {
            $set: {
                "title": title,
                "tag": tag
                }
        },
        {upsert: false})
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });
}

// logic to delete moment data
exports.deleteMoment = (req, res)=> {
    moment.findByIdAndRemove(
        {"_id":req.params.id})
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });
}

// logic to get all moment data
exports.getAllMoments = (req, res)=> {
    moment.find()
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });
}

// logic to get single moment data
exports.getSingleMoment = (req, res)=> {
    moment.findById(
        {"_id":req.params.id})
        .then(result => {
            res.json(result);
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });
}