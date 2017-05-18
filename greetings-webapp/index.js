var express = require('express')
var app = express()
var namesGreetedMap = {};
var server = app.listen(3000);

app.get('/greetings/:name', function(req, res) {
  res.send('Hello, ' + req.params.name);
  var name = req.params.name
  if (namesGreetedMap[name] == undefined) {
    namesGreetedMap[name] = 1
  }
  else {
    namesGreetedMap[name] += 1
  }
});

app.get('/greeted/', function(req, res) {
  res.send(namesGreetedMap);
});

app.get('/counter/:user_name', function(req, res) {
  var users = req.params.user_name;
  if( namesGreetedMap[users] === undefined ){
     namesGreetedMap[users] = 0
    res.send('Hello, ' + users + ' has been greeted ' + namesGreetedMap[users] + ' time(s)');
  }

});
