


//moduler scafolding

const handler = {};

handler.samplehandler = (requestProperties,callback) =>{
    console.log(requestProperties);

    callback(200,{
        message : 'this is a sample url',
    });
};

module.exports = handler;