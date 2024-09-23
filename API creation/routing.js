


//dependences 

const {samplehandler} = require('./handlers/routinghandlers/samplehandler');
const {userhandler} = require('./handlers/routinghandlers/userHandler');
const {tokenhandler} = require('./handlers/routinghandlers/tokenHandler');

const routers = {
    sample : samplehandler,
    user : userhandler,
    token : tokenhandler,
};

module.exports = routers;