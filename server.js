var express = require('express');
var app = express();
var mysql = require('mysql');
var data;
var data2;
app.set('view engine', 'ejs');

//app.get('/', function(req, res) {
  //res.render("pages/index");
//});

var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

// test database

  connection.connect()

connection.query('SELECT * FROM students', function (err, rows, fields) {
  
  if (err) throw err;
  data = rows;
});


connection.query('SELECT * FROM subjects', function (err, rows, fields) {
  
  if (err) throw err;
  data2 = rows;

});

connection.end()

app.get('/student', function(req, res) {

  res.render("pages/student",{rows:data});
});


app.get('/subjects', function(req, res) {

  res.render("pages/subjects",{rows:data2});
});


console.log('App is running at http://localhost:8080');
app.listen(8080);


//res.redirect(url)

//////////////////////////////


////