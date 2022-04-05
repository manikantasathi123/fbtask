const express = require('express');
//const router = express.Router();
//const user = require('../controllers/usercontrollers.js');
//const post = require('../controllers/postcontrollers.js');
//const friendRequest = require('../controllers/friendrequestcontrollers.js')
const db=require('./database')
















db(()=>app.listen(3000,()=>console.log('server Started 3000')));