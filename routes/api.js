const express = require('express');
const user = require('../controllers/usercontrollers.js');
const router = express.Router();
const post = require('../controllers/postcontrollers.js');
const friendRequest = require('../controllers/friendrequestcontrollers.js');
const db=require('./database');
app.use(express.json());




//frined list
router.get('/friendrequests',friendRequest.getallrequests);
router.delete('/friendrequests/:requestid', friendrequestcontrollers.deleterequest);
//profile
router.post('/posts', postcontrollers.createPost);
router.delete('/posts/:postid', postcontrollers.deletepost);

//community
router.get('/posts',  usercontrollers.getallposts);







db(()=>app.listen(3000,()=>console.log('server Started 3000')));


