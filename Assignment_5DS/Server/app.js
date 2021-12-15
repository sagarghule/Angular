//import the dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

const port = 3400;
const mongoURLCloud = "mongodb+srv://Sagar:sagar%401997@cluster0.cmqis.mongodb.net/5DS?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
})

app.use('/static', express.static(path.join(__dirname, 'uploads')))
app.use(cors({origin:"*"}));

//pass all requests to routes
app.use('/', routes);

//connect with database
mongoose.connect(
    mongoURLCloud,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(sucess =>{
    console.log('connected to MongoDB Atlas !');

    //start server after connecting to database
    app.listen(port,()=>{
        console.log(`App running on port ${port}`);
    })
}).catch(err =>{
    console.log('Error connecting to MongoDB Atlas...' + err);
})
