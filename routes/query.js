var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res) {

  //var q=req.query.q;
  console.log(req.query.q);
var MongoClient = require('mongodb').MongoClient,format=require('util').format;

var database="magnadb";
var collection="Open";
var test;
MongoClient.connect('mongodb://34.82.213.77:27017',function(err,db){
    if (err) throw err;
    var dbo = db.db(database);

    dbo.collection("CI").find().toArray(function(err, result1) {
      if (err) throw err;
     else{
       
       test=result1;
      
     }
    });
    
   
    dbo.collection(collection).find().toArray(function(err, result) {
      if (err) throw err;
     else{
       
       res.json({hits: result,ci:test});
      
     }
      db.close();
    });
  });





});

module.exports = router;
