var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// delete data
app.delete('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];

       console.log( data );
       res.end( JSON.stringify(data));
   });
});


app.get('/index.html', function(req, res) {
  fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
});

app.use(express.static(__dirname + '/public'));

// GET REQUEST WEB SERVICE
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     console.log(req);
       res.end( data );
   });
});
// POST REQUEST WEB SERVICE
app.post('/addUser', function (req, res) {
  var receiveddata = req.body.user4;
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {

       data = JSON.parse( data );
       data["user4"] = receiveddata;
      console.log( data );
       res.end( JSON.stringify(data));
   });
});
// GET USER DETAIL BASED ON QUERY STRING
app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id]
       console.log( user );
       res.end( JSON.stringify(user));
   });
});


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
