var express = require('express')
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express()
var counter = 0;
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
  var message = '';
  var language = req.body.language;
  var nameGreeted = req.body.firstName;
  
  if(language === 'english'){
    message = 'Hello, ' + nameGreeted;
    counter++;
  }
  else if (language === 'afrikaans') {
  message = 'Hallo, ' + nameGreeted ;
  counter++;
  }
  else if (language ==='isiXhosa'){
  message = 'Molo, ' + nameGreeted ;
  counter++;
   }

   res.render('index',{
     outputMessage : message,
     outputCounter : counter
   })

 });
