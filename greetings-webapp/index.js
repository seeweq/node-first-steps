var express = require('express')
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express()

var server = app.listen(3000);

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));


app.get('/greetings', function(req, res) {
  res.render('index')
});

  app.post('/greetings', function(req ,res){
  var language = req.body.language
  if(language === 'english'){
    res.render('index', {output: 'Hello, ' + req.body.firstName});
  }
  else if (language === 'afrikaans') {
  res.render('index', {output: 'Hallo, ' + req.body.firstName});
  }
  else if (language ==='isiXhosa'){
  res.render('index', {output: 'Molo, ' + req.body.firstName});
   }

 });
