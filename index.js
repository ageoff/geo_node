import express from 'express'
import mysql from 'mysql'

var app = express()
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "steve"
});

app.get('/', function(req, res){
  res.send('Hello World')
});

app.get('/test', function(req, res){
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM nodes", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
})

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000)
  console.log('Express started on port 3000')
}
