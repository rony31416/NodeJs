


//dependences 

const {samplehandler} = require('./handlers/routinghandlers/samplehandler');
const {userhandler} = require('./handlers/routinghandlers/userHandler');
const {tokenhandler} = require('./handlers/routinghandlers/tokenHandler');
const {checkhandler} = require('./handlers/routinghandlers/checkHandler');

const routers = {
    sample : samplehandler,
    user : userhandler,
    token : tokenhandler,
    check : checkhandler,
};

module.exports = routers;