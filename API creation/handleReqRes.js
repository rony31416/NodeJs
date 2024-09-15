//dependences 

const url = require('url'); 
const {StringDecoder} = require('string_decoder');
const routes = require('./routing');
const {notFoundHandler} = require('./handlers/routinghandlers/notFoundHandler');
const {parseJSON} = require('./utilities');




//modulo scafolding 
const handler = {};

handler.handleReqRes = (req,res) =>{
    //request handling 
    //get the url and parse it
    const parseUrl = url.parse(req.url,true);
    //console.log(parseUrl);
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g,'');
   // console.log(trimedPath);
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;


    const requestProperties = {
       parseUrl,
       path,
       trimedPath,
       method,
       queryStringObject,
       headersObject,
    };

    const decoder = new StringDecoder('utf-8');

    let realData = '';

    console.log(trimedPath);

    const chosenHandler = routes[trimedPath] ? routes[trimedPath] : notFoundHandler;

    req.on('data', (buffer) =>{
        realData += decoder.write(buffer);
    });

    req.on('end' , () =>{
        realData += decoder.end();

        requestProperties.body = parseJSON(realData);
        
        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            // return the final response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        });
        
        //res.end('Hello World BD!');
    });
   //respose handle
};

module.exports = handler;