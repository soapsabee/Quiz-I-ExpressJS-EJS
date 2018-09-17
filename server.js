var express = require('express');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('pages/index');
});
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

// test database
connection.connect()

connection.query('SELECT * FROM students', function (err, rows, fields) {
  
  if (err) throw err

  console.log('The solution is: ', rows);

});

connection.end()

console.log('App is running at http://localhost:8080');
app.listen(8080);


//res.redirect(url)

//////////////////////////////


////