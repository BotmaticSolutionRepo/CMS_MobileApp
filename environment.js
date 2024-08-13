var _Environments = {
              // production:  {BASE_URL: 'https://api.vyay.live', API_KEY: ''}, //Production or live url 
               production: {BASE_URL: 'https://cmsapi.vyay.live', API_KEY: ''}, //Devlopment
               


          //     production: {BASE_URL: 'http://13.126.125.20:84', API_KEY: ''}, //Devlopment
          //      production:  {BASE_URL: 'http://13.126.125.20:8092', API_KEY: ''}, //production old url 
            //    production:  {BASE_URL: 'http://13.126.125.20:8081', API_KEY: ''},
            //    staging:     {BASE_URL: 'http://api.vyay.info', API_KEY: ''},
            //    development: {BASE_URL: 'http://api.vyay.info', API_KEY: ''},
};

function getEnvironment() {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  // var platform = getPlatform()

  // ...now return the correct environment
    return _Environments.production;
// return _Environments['production']
}
var Environment = getEnvironment();
module.exports = Environment;
