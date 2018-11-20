var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  var dbo = db.db("employee");

  var myquery = {Designation : "Developer"};

  dbo.collection("emp").deleteMany(myquery, function(err, res) {
    console.log(res.deletedCount + " document deleted");
    db.close();
  });

});