//dependences 

const url = require('url'); 
const {StringDecoder} = require('string_decoder');
const routes = require('./routing');
const {notFoundHandler} = require('./handlers/routinghandlers/notFoundHandler');




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

    const chosenHandler = routes[trimedPath] ? routes[trimedPath] : notFoundHandler;

    req.on('data', (buffer) =>{
        realData += decoder.write(buffer);
    });

    req.on('end' , () =>{
        realData += decoder.end();
        
        chosenHandler(requestProperties, (statusCode,payLoad) =>{
            statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
            payLoad = typeof(payLoad) === 'object' ? payLoad : {};
            //payLoad object k response hisebe pathaite hoile json formate lagbe 
            
            const payLoadString = JSON.stringify(payLoad);
            // return the final response 
            res.writeHead(statusCode);
            res.end(payLoadString);
        });
        
        res.end('Hello World BD!');
    });
   //respose handle
};

module.exports = handler;