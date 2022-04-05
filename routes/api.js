const express = require('express');
const router = express.Router();
const user = require('../controllers/usercontrollers.js');
const post = require('../controllers/postcontrollers.js');
const friendRequest = require('../controllers/friendrequestcontrollers.js')
const db=require('./database')



//frined list
router.get('/friendrequests', auth.checkReferer, friendRequest.getAllRequests);
router.delete('/friendrequests/:requestid', auth.checkReferer, friendRequest.deleteRequest);
//profile
router.post('/posts', auth.checkReferer, auth.verifyToken, post.postValidation, post.createPost);
router.delete('/posts/:postid', auth.checkReferer, post.deletePost);

//community
router.get('/posts', auth.checkReferer, post.getAllPosts);

module.exports = router;





db(()=>app.listen(3000,()=>console.log('server Started 3000')));


