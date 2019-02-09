let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');
let cors = require('cors');

let environment = require('../constant/environment');

module.exports = function(){
  let app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use(cors());
  app.use(express.static(environment.baseRef));
  app.set('port', environment.port);

  consign()
    .include(environment.paths.controller)
    .into(app);
  
  return app;
}