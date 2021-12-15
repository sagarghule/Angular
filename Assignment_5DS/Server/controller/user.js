//import models to interact with MongoDb
const user = require('../model/user');
const bcrypt = require('bcrypt');
const config = require("../config");

//handlers
// Login by email and password
exports.loginUser = (req, res,next) => {
    const{
        email,
        password
    } = req.body;
    user.findOne({"email":email})
    .then(result => {
        if(bcrypt.compareSync(password, result.hashedPassword))
        {
            result = result.toObject();
            delete result.hashedPassword;
            req.user = result;
            next();
        }
        else
        {
            res.status(401).send('Invalid Password, Please try again.')
        }
    }).catch(err => {
        res.status(500).json({
            error: "User Not Exists, Please Sign Up."
        })
    });
}


//login using ID
exports.loggedIn = (req, res) =>{
    const id = config.id;
    user.findById(id)
    .then(result =>{
            result = result.toObject();
            delete result.hashedPassword;
            res.status(200).send(result);
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    });
}


// logic to create new user 
exports.createUser = (req, res, next) => {
    const{
        fname,
        lname,
        email,
        phonNum,
        password
    } = req.body;
    //bcrypt password
    const hashedPassword = bcrypt.hashSync(password, 10);
    const userObject = new user({
        "fname": fname,
        "lname": lname,
        "email": email,
        "phonNum": phonNum,
        "hashedPassword":hashedPassword
    });
    userObject.save()
    .then(result => {
            result = result.toObject();
            delete result.hashedPassword;
            req.user = result;
            next();
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    });
}


// logic to update user data
exports.updateUser = (req, res, next)=> {
    const{
        fname,
        lname,
        email,
        phonNum,
        address,
        city
    } = req.body;
    user.findOneAndUpdate(
        {"email":email},
        {
            $set: {
                    "fname": fname,
                    "lname": lname,
                    "email": email,
                    "phonNum": phonNum,
                    "address": address,
                    "city": city,
                }
        },
        {upsert: false})
        .then(result => {
            result = result.toObject();
            delete result.hashedPassword;
            req.user = result;
            next();
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });
}


// logic to update user password
exports.updatePassword = (req, res,next)=> {
    const{
        email,
        password
    } = req.body;
    //bcrypt password
    const hashedPassword = bcrypt.hashSync(password, 10);
    user.findOneAndUpdate(
            {"email":email},
            {
                $set: {"hashedPassword": hashedPassword}
            },
            {upsert: false}
        )
        .then(result => {
            result = result.toObject();
            delete result.hashedPassword;
            req.user = result;
            next();
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });
}


// logic to update Image data
exports.updateImage = (req, res)=> {
  const image = 'http://localhost:3400/uploads/' + req.file.filename; //set dynamically
  const email= config.email;
    user.findOneAndUpdate(
        {"email":email},
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
            res.status(500).json({
                error: err
            })
        });
}


