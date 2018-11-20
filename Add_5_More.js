var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  var dbo = db.db("employee");
  var myobj = [
	{ Ename:"Sagar", Department:"Development Staff", Designation : "Developer", Salary : 15000, DateofJoining: new Date(2000,01,04,0,0), City : "New York" },
	{ Ename:"Sumanthra", Department:"Development Staff", Designation : "Developer", Salary : 20000, DateofJoining: new Date(2001,01,01,0,0), City : "California" },
	{ Ename:"Bill", Department:"Management Staff", Designation : "Accountant", Salary : 15000, DateofJoining: new Date(2000,01,04,0,0), City : "California" },
	{ Ename:"Ravi", Department:"Logistic StaffStaff", Designation : "Managar", Salary : 30000, DateofJoining: new Date(2001,01,01,0,0), City : "Singapore" },
	{ Ename:"Ibrahim", Department:"Management Staff", Designation : "Manager", Salary : 15000, DateofJoining: new Date(2000,01,04,0,0), City : "Singapore" }
  ];

  dbo.collection("emp").insertMany(myobj, function(err, res) {
    console.log("Number of Employees inserted: " + res.insertedCount);
    db.close();
  });
});