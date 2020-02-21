var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res) {

  //var q=req.query.q;
  console.log(req.query.q);
var MongoClient = require('mongodb').MongoClient,format=require('util').format;

var database="magnadb";
var collection="Incidents";
MongoClient.connect('mongodb://34.82.213.77:27017',function(err,db){
    if (err) throw err;
    var dbo = db.db(database);
    var status;

    dbo.collection(collection).aggregate([{"$group" : {_id:"$Status", count:{$sum:1}}}]).toArray(function(err, result) {
   
      if (err) throw err;
     else{
      status=result;
     }
    });

    dbo.collection("Open").count(function(err, result) {
      if (err) throw err;
     else{
      status[1]={ _id: 'Open', count: result };
     }
    });

    dbo.collection(collection).aggregate([{"$group" : {_id:"$CI", count:{$sum:1}}}]).toArray(function(err, result) {
   
      if (err) throw err;
     else{
       
       res.json({hits: result,statusCount:status});
      
     }
      db.close();
    });
  });





});

module.exports = router;
