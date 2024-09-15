


//dependences 

const {samplehandler} = require('./handlers/routinghandlers/samplehandler');
const {userhandler} = require('./handlers/routinghandlers/userHandler');

const routers = {
    'sample' : samplehandler,
    'user' : userhandler,
};

module.exports = routers;