/*
title : uptime monitoring application
Derscription : A restful API to monitor up or down time of user defined links 
Date : 19-08-24
*/

// Dependences

const http = require('http');
const { Console } = require('console');
const {handleReqRes} = require('./handleReqRes');
const environment = require('./handlers/environment');
const data = require('./lib/data');


//testing the file system
// data.create('test','newFile',{name : 'Rony',Age : '23'},function(err){
    // console.log(`error is ` , err);
// });


// data.update('test','newFile',{ 'name' : 'badhon' , 'Age'  : '10'},(err)=>{
    // console.log(err);
// });

data.delete('test','newFile',(err)=>{
    console.log(err);
});
// 
// 





//app object - module scafoulding
const app = {};

// config
// 
app.config = {
    port : 3000,
};

//create the server 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    
    //we can use the environment object and remove the app.config object...
    server.listen(app.config.port,() =>{
        console.log(`listening to port ${app.config.port}`);

    });

};

// handle req and res
app.handleReqRes = handleReqRes;



// start the server 
app.createServer();