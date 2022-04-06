const mongodb = require('mongodb');

const mongoclient = mongodb.MongoClient;


const connection =  mongoclient.connect('mongodb://localhost:27017')
                    .then(result=>{
                        console.log(result);
                        
                    })
                    .catch(err=>console.log(err));
                

module.exports = connection;

