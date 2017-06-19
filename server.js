var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// SPECIFY DIST FOLDER
// set the static files location 
app.use(express.static(__dirname + '/public'));

// Specify specific express routes you want rendered
app.get('/home', function (req, res) {
  res.render('home');
});

app.get('/invoices', function (req, res) {
  res.render('invoices', {layout: 'ember'});
});


// 404 error
app.use(function(req,res){
  res.status(404).send('nar mate');
});

// EMBER STARTS HERE
// Serve every other route using ember
// app.get('*', function(req,res){
//   res.sendFile(__dirname + '/public/index.html');
// });

app.listen(3000, ()=>{
  console.log('Listening on port 3000');
});
