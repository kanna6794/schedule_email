var mongoose = require('mongoose');
//var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  email:{
    type: String,
    default:''
  },
  subject:{
    type: String,
    default:''
  },
  schedule: {
    type: String,
    default:''
  },
  se_time: {
    type: String,
    default:''
  },
  se_createddate: {
    type: String
  },
  

 
},
  { collection: 'se_user' });

module.exports = mongoose.model('se_user', UserSchema);


