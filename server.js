const express = require('express');
const router = express.Router();
const user = require('./controllers/usercontrollers.js');
const post = require('./controllers/postcontrollers.js');
const friendRequest = require('./controllers/friendrequestcontrollers.js')
const db = require('./database/database.js')



//friends list
router.get('/friendlist',  friendRequest.getAllRequests);
router.delete('/friendlist',  friendRequest.deleteRequest);
//profile
router.post('/myprofile',   post.createPost);
router.delete('/myprofile',  post.deletePost);

//community
router.get('/community',  user.getAllPosts);

module.exports = router;





db(()=>app.listen(3000,()=>console.log('server Started 3000')));


