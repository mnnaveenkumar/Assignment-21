var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  var dbo = db.db("employee");
  var myobj = [
	{ Ename:"Rajashaker", Department:"Clerical Staff", Designation : "Development Staff", Salary : 3000, DateofJoining: new Date(2000,01,04,0,0),City : "Delhi" },
	{ Ename:"Samual", Department:"Clerical Staff", Designation : "DevelopmentStaff", Salary : 5000, DateofJoining: new Date(2001,01,01,0,0), City : "Delhi" },
	{ Ename:"Shankar", Department:"Support Staff", Designation : "Mangager", Salary : 5000, DateofJoining: new Date(2000,01,04,0,0), City : "Bangalore" },
	{ Ename:"Shruthi", Department:"Ops Staff", Designation : "Team Leader", Salary : 15000, DateofJoining:new Date(2001,01,01,0,0), City : "Bangalore" },
	{ Ename:"Veena", Department:"Ops Staff", Designation : "Manager", Salary : 20000, DateofJoining: new Date(2000,01,04,0,0), City : "New York" },
	{ Ename:"Anil Kumar", Department:"Development Staff", Designation : "Developer", Salary : 25000, DateofJoining: new Date(2000,01,04,0,0), City : "New York" },
	{ Ename:"Rohit", Department:"Development Staff", Designation : "Developer", Salary : 25000, DateofJoining: new Date(2001,01,01,0,0), City : "California" },
	{ Ename:"Vinay", Department:"Management Staff", Designation : "Accountant", Salary : 22000, DateofJoining: new Date(2000,01,04,0,0), City : "California" },
	{ Ename:"Sharath", Department:"Management Staff", Designation : "Managar", Salary : 30000, DateofJoining: new Date(2001,01,01,0,0), City : "Singapore" },
	{ Ename:"Sundhar Raj", Department:"Logistic Staff", Designation : "Manager", Salary : 26000, DateofJoining: new Date(2000,01,04,0,0), City : "Singapore" }
  ];
  dbo.collection("emp").insertMany(myobj, function(err, res) {
    console.log("Number of Employees inserted: " + res.insertedCount);
    db.close();
  });
});