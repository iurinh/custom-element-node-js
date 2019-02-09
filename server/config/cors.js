let cors = require('cors');
let uri = require('../constant/variables').uri;

module.exports = function(){
  let originsWhitelist = [uri];
  let corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }

  return cors(corsOptions);
}