var config = require('../config/default');
var keyPrefix = config.keys.prefix;

exports.key = function(name){
  return keyPrefix + name;
};

exports.time = function(){
  // return ~~(new Date()/1000);
  return Math.floor(new Date()/1000);
};
