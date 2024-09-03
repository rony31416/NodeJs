

const environment = {};

environment.staging = {
   port : 3000,
   envName : 'staging',
};


environment.production = {
    port : 5000,
    envName : 'production',
 };

// finding the passed environments

const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

//export the environment 

const exportEnv = typeof(environment[currentEnv]) === 'object' ? environment[currentEnv] : environment.staging;


module.exports = environment.exportEnv;
