'use strict';

global.express       = require('express');
global.router        = express.Router();
global.mongoose      = require('mongoose');
global.nodemailer    = require('nodemailer');
const ObjectId = mongoose.Types.ObjectId;

global.user = mongoose.model('se_user');

var endpoints = [
 './email_user'
];


endpoints.forEach(function(endpoint){
   require(endpoint);
});



module.exports = router;

