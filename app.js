var express = require('express'),
  nodemailer = require("nodemailer");
  
var billyAndJamiEmail = "BillyAndJami@gmail.com";
var billyEmail = "Billy.Adamowski@gmail.com";
var jamiEmail = "jlenzzz@gmail.com";

var transport = nodemailer.createTransport("Gmail",{
    auth: {
        user: billyAndJamiEmail,
        pass: "BJWedding2014"
    }
});

var app = express();

// configure Express
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.engine('ejs', require('ejs-locals'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'ash ketchum' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger());
});


app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/save', function(req, res){
  res.render('save', { user: req.user });
});

app.post('/rsvp', function(req, res){
  var rsvp_attending = req.body.rsvp_attending;
  var rsvp_name = req.body.rsvp_name;
  var rsvp_number = req.body.rsvp_number;

  var subject = "RSVP from " + rsvp_name + "!";
  var text = "Name: " + rsvp_name + "\nAttending: " + rsvp_attending;
  if(rsvp_attending && rsvp_attending == "true"){
    text += "\nNumber: " + rsvp_number;
  }

  var mailOptions = {
    from: billyAndJamiEmail,
    to: billyAndJamiEmail + ", " + billyEmail + ", " + jamiEmail,
    subject: subject,
    text: text
  }

  transport.sendMail(mailOptions, function(error, response){
    if(error){
      res.statusCode = 500;
      res.end();
    }else{
      res.end();
    }
  });
});

app.post('/tourney', function(req, res){
  var team_name = req.body.team_name;
  var player_1 = req.body.player_1;
  var player_2 = req.body.player_2;
  var email = req.body.email;

  var subject = "Tourney Sign Up for Team " + team_name + "!";
  var text = "Team Name: " + team_name + "\nPlayer 1: " + player_1 + "\nPlayer 2: " + player_2+ "\nEmail: " + email;;

  var mailOptions = {
    from: billyAndJamiEmail,
    to: billyAndJamiEmail + ", " + billyEmail + ", " + jamiEmail,
    subject: subject,
    text: text
  }

  transport.sendMail(mailOptions, function(error, response){
    if(error){
      res.statusCode = 500;
      res.end();
    }else{
      res.end();
    }
  });
});

app.listen(8080, function() {
  console.log("Application started on port 8080!");
});