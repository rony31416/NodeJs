

//dependences

const data = require('../../lib/data');
const {hash} = require('../../utilities');
const {parseJSON} = require('../../utilities');
const tokenHandler = require('./tokenHandler');

//moduler scafolding

// const handler = {}
// 
// handler.userHandler = (requestProperties, callback) => {
    // const acceptedMethods = ['get', 'post', 'put', 'delete'];
    // if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        // handler._user[requestProperties.method](requestProperties, callback);
    // } else {
        // callback(405);
    // }
// };
// 
// handler._user = {};
// 
// handler._user.post = (requestProperties,callback) => {
// 
    // const firstName = typeof(requestProperties.body.firstName) === 'string' && 
    // requestProperties.body.firstName.trim().length > 0 ? requestProperties.body.firstName : false;
// 
    // const lastName = typeof(requestProperties.body.lastName) === 'string' && 
    // requestProperties.body.lastName.trim().length > 0 ? requestProperties.body.lastName : false;
// 
    // const phone = typeof(requestProperties.body.phone) === 'string' && 
    // requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false;
// 
    // const password = typeof(requestProperties.body.password) === 'string' && 
    // requestProperties.body.password.trim().length > 0 ? requestProperties.body.password : false;
// 
    // const termsAgreement =
    // typeof requestProperties.body.termsAgreement === 'boolean' &&
    // requestProperties.body.termsAgreement
        // ? requestProperties.body.termsAgreement
        // : false;
// 
// 
    // if(firstName && lastName && phone && password &&termsAgreement) {
// 
        // if the user already doesnot exists !
        // data.read('API creation/.data/users',phone,(err)=>{
            // if(err){
                // let userObject = {
                    // firstName,
                    // lastName,
                    // phone,
                    // password : hash(password),
                    // termsAgreement,
                // };
       
       
                // store in db
// 
                // data.create('API creation/.data/users',phone,userObject,(err)=>{
                    // if(!err){
                        // callback(200,{
                            // 'message' : 'User crested successfully!!',
                        // });
                    // }
                    // else{
                        // callback(500,{
                            // 'error' : 'Couldnot create user',
                        // });
                    // }
// 
                // });
            // }
            // else{
                // callback(500,{
                    // 'error' : 'There are a problem in server side!',
                // });
            // }
// 
// 
        // });
    // }else{
        // callback(400,{
            // error : 'There are an error in your inputs',
        // });
    // }
// 
// 
// };
// 
// 
// module scaffolding
/*
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
    const firstName =
        typeof requestProperties.body.firstName === 'string' &&
        requestProperties.body.firstName.trim().length > 0
            ? requestProperties.body.firstName
            : false;

    const lastName =
        typeof requestProperties.body.lastName === 'string' &&
        requestProperties.body.lastName.trim().length > 0
            ? requestProperties.body.lastName
            : false;

    const phone =
        typeof requestProperties.body.phone === 'string' &&
        requestProperties.body.phone.trim().length === 11
            ? requestProperties.body.phone
            : false;

    const password =
        typeof requestProperties.body.password === 'string' &&
        requestProperties.body.password.trim().length > 0
            ? requestProperties.body.password
            : false;

    const tosAgreement =
        typeof requestProperties.body.tosAgreement === 'boolean' &&
        requestProperties.body.tosAgreement
            ? requestProperties.body.tosAgreement
            : false;

    if (firstName && lastName && phone && password && tosAgreement) {
        // make sure that the user doesn't already exists
        data.read('users', phone, (err1) => {
            if (err1) {
                const userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    tosAgreement,
                };
                // store the user to db
                data.create('users', phone, userObject, (err2) => {
                    if (!err2) {
                        callback(200, {
                            message: 'User was created successfully!',
                        });
                    } else {
                        callback(500, { error: 'Could not create user!' });
                    }
                });
            } else {
                callback(500, {
                    error: 'There was a problem in server side!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'You have a problem in your request',
        });
    }
};


handler._users.get = (requestProperties,callback) => {
    callback(200);

};


handler._users.put = (requestProperties,callback) => {

};


//handler._user.delete = (requestProperties,callback) => {

//};


module.exports = handler;
*/



//moduler scafolding

const handler = {};

handler.userhandler = (requestProperties,callback) =>{

    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};



handler._users = {};


handler._users.post = (requestProperties, callback) => {
    const firstName =
        typeof requestProperties.body.firstName === 'string' &&
        requestProperties.body.firstName.trim().length > 0
            ? requestProperties.body.firstName
            : false;

    const lastName =
        typeof requestProperties.body.lastName === 'string' &&
        requestProperties.body.lastName.trim().length > 0
            ? requestProperties.body.lastName
            : false;

    const phone =
        typeof requestProperties.body.phone === 'string' &&
        requestProperties.body.phone.trim().length === 11
            ? requestProperties.body.phone
            : false;

    const password =
        typeof requestProperties.body.password === 'string' &&
        requestProperties.body.password.trim().length > 0
            ? requestProperties.body.password
            : false;

    const tosAgreement =
        typeof requestProperties.body.tosAgreement === 'boolean' &&
        requestProperties.body.tosAgreement
            ? requestProperties.body.tosAgreement
            : false;

    if (firstName && lastName && phone && password && tosAgreement) {
        // make sure that the user doesn't already exists
        data.read('users', phone, (err1) => {
            if (err1) {
                const userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    tosAgreement,
                };
                // store the user to db
                data.create('users', phone, userObject, (err2) => {
                    if (!err2) {
                        callback(200, {
                            message: 'User was created successfully!',
                        });
                    } else {
                        callback(500, { error: 'Could not create user!' });
                    }
                });
            } else {
                callback(500, {
                    error: 'There was a problem in server side!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'You have a problem in your request',
        });
    }
};

handler._users.get = (requestProperties, callback) => {
    // check the phone number if valid
    const phone =
        typeof requestProperties.queryStringObject.phone === 'string' &&
        requestProperties.queryStringObject.phone.trim().length === 11
            ? requestProperties.queryStringObject.phone
            : false;
    if (phone) {
        //verify tooken
        let token = typeof(requestProperties.headersObject.token) === 'string' ?
        requestProperties.headersObject.token : false;

        tokenHandler._token.verify(token,phone,(tokenId) => {
            if(tokenId){
                data.read('users', phone, (err, u) => {
                    const user = { ...parseJSON(u) };
                    if (!err && user) {
                        delete user.password;
                        callback(200, user);
                    } else {
                        callback(404, {
                            error: 'Requested user was not found!',
                        });
                    }
                });
            }else{
                callback(403,{
                    error :  'Authentication Failure!'
                });
            }
        });

        // lookup the user
    } else {
        callback(404, {
            error: 'Requested user was not found!',
        });
    }
};

handler._users.put = (requestProperties, callback) => {
    // check the phone number if valid
    const phone =
        typeof requestProperties.body.phone === 'string' &&
        requestProperties.body.phone.trim().length === 11
            ? requestProperties.body.phone
            : false;

    const firstName =
        typeof requestProperties.body.firstName === 'string' &&
        requestProperties.body.firstName.trim().length > 0
            ? requestProperties.body.firstName
            : false;

    const lastName =
        typeof requestProperties.body.lastName === 'string' &&
        requestProperties.body.lastName.trim().length > 0
            ? requestProperties.body.lastName
            : false;

    const password =
        typeof requestProperties.body.password === 'string' &&
        requestProperties.body.password.trim().length > 0
            ? requestProperties.body.password
            : false;

    if (phone) {
        if (firstName || lastName || password) {
            let token = typeof(requestProperties.headersObject.token) === 'string' ?
            requestProperties.headersObject.token : false;
            tokenHandler._token.verify(token,phone,(tokenId) => {
                if(tokenId){
                    data.read('users', phone, (err1, uData) => {
                        const userData = { ...parseJSON(uData) };
                        if (!err1 && userData) {
                            if (firstName) {
                                userData.firstName = firstName;
                            }
                            if (lastName) {
                                userData.lastName = lastName;
                            }
                            if (password) {
                                userData.password = hash(password);
                            }
                            // store to database
                            data.update('users', phone, userData, (err2) => {
                                if (!err2) {
                                    callback(200, {
                                        message: 'User was updated successfully!',
                                    });
                                } else {
                                    callback(500, {
                                        error: 'There was a problem in the server side!',
                                    });
                                }
                            });
                        } else {
                            callback(400, {
                                error: 'You have a problem in your request!',
                            });
                        }
                    });

                }else{
                    callback(403,{
                        error :  'Authentication Failure!'
                    });
                }
            });

            // loopkup the use
        } else {
            callback(400, {
                error: 'You have a problem in your request!',
            });
        }
    } else {
        callback(400, {
            error: 'Invalid phone number. Please try again!',
        });
    }
};

handler._users.delete = (requestProperties, callback) => {
    // check the phone number if valid
    const phone =
        typeof requestProperties.queryStringObject.phone === 'string' &&
        requestProperties.queryStringObject.phone.trim().length === 11
            ? requestProperties.queryStringObject.phone
            : false;

    if (phone) {
        //veryfy  the the users 
        let token = typeof(requestProperties.headersObject.token) === 'string' ?
        requestProperties.headersObject.token : false;
        tokenHandler._token.verify(token,phone,(tokenId) => {
            if(tokenId){

                data.read('users', phone, (err1, userData) => {
                    if (!err1 && userData) {
                        data.delete('users', phone, (err2) => {
                            if (!err2) {
                                callback(200, {
                                    message: 'User was successfully deleted!',
                                });
                            } else {
                                callback(500, {
                                    error: 'There was a server side error!',
                                });
                            }
                        });
                    } else {
                        callback(500, {
                            error: 'There was a server side error!',
                        });
                    }
                });
            }else{
                callback(403,{
                    error :  'Authentication Failure!'
                });
            }
        });
        // lookup the user
    } else {
        callback(400, {
            error: 'There was a problem in your request!',
        });
    }
};



module.exports = handler;