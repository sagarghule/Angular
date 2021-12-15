const jwt = require('jsonwebtoken');
const config = require("../config");

function generateToken(user){
    const payload = JSON.stringify(user);
    return jwt.sign(
        payload,
        config.jwtSecreteKey
    )
};

//validation function for routes which put jwt token and user in response
function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, config.jwtSecreteKey);
  config.id = payload._id;
  config.email = payload.email;
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  next()
}

//function to generate token and send it in response
function generator(req, res)
{
    const user = req.user;
    const token = generateToken(user);
    res.json({
        user,
        token
    });
}
module.exports = {
    generateToken,
    verifyToken,
    generator
}