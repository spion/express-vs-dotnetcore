var express = require('express')
var path = require('path')

var app = express()

app.set('views', path.join( __dirname, '/views') ); // critical to use path.join on windows
app.set('view engine', 'vash');

app.get('/', (req, res) => {
  //console.log("Got index!")
  var vm = {
    title: 'Express',
    time: new Date()
  }
  //console.log("Lest render")
  res.render('index', vm);
});

app.listen(3333)
