//import typeof  from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/mime';

var express = require('express');
var router = express.Router();
var mongoDB = require('mongodb');

/* GET users listing. */
router.get('/', async function (req, res) {
    var MongoClient = require('mongodb').MongoClient, format = require('util').format;
    var database = "magnadb";
    var collection = "Incidents";

    //console.log(req);
    MongoClient.connect('mongodb://34.82.213.77:27017', function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);
         var data="{"+
         '"Incident":"'+ req.query.incident + '",' +
         '"Summary":"'+ req.query.summary + '",' +
         '"Group":"'+ req.query.group + '",' +
         '"Priority":"'+ req.query.priority + '",' +
         '"Status":"'+ req.query.status + '",' +
         '"Assigned_To":"'+ req.query.assignedto + '",' +
         '"Open_Date":"'+ req.query.opendate + '",' +
         '"CI":"'+ req.query.ci + '",' +
         '"Impact":"'+ req.query.impact + '",' +
         '"Incident_area":"'+ req.query.incidentarea + '",' +
         '"External_vendor_ticket":"'+ req.query.external + '",' +
         '"Vendor":"'+ req.query.vendor + '",' +
         '"Affected_end_user":"'+ req.query.affected + '",' +
         '"Resolution_Code":"'+ req.query.resCode + '",' +
         '"Resolution_Detail":"'+req.query.resDetail+ '"}';

         var deletevar={ '_id' : new mongoDB.ObjectId(req.query._id) }
         dbo.collection("Open").deleteOne(deletevar , function(err, res) {
            if (err) {console.log(err);}
            console.log(res.deletedCount);
        });

        console.log(JSON.parse(data))
        dbo.collection(collection).insertOne(JSON.parse(data), function(err, res) {
            if (err) {console.log(err);}
          console.log("inserted: "+res);
            db.close();
        });
    });

});
module.exports = router;

