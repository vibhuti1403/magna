var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {

    //var q=req.query.q;
    console.log("Q:" + req.query.q + "   w:" + req.query.w);
    var MongoClient = require('mongodb').MongoClient, format = require('util').format;

    var database = "magnadb";
    var collection = "Incidents";
    MongoClient.connect('mongodb://34.82.213.77:27017', function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        var parameters = req.query.CI + " " + req.query.Group;
        dbo.collection(collection).find(
            { $text: { $search: parameters } }
        ).toArray(function (err, result) {
            if (err) throw err;
            else {
                console.log(result.length);
                res.json({ hits: result });

            }
            db.close();
        });
    });





});

module.exports = router;
