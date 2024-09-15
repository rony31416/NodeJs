


//moduler scafolding

const handler = {};

handler.notFoundHandler = (requestProperties,callback) =>{
    callback(404,{
        message : 'your requested url is not found KENO VAI? ',
    });
  
};

module.exports = handler;