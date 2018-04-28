let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let multer = require('multer');
var upload = multer();
let session = require('express-session');
let cookieParser = require('cookie-parser')
let mongoose = require('mongoose');
let cors = require('cors');


let port = 4200;

let User = require('../src/models/User')

mongoose.connect('mongodb://dremurguido:6932398b@ds253879.mlab.com:53879/authentication')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors())
app.use(session({
  secret: '6932398b',
  saveUninitialized: false,
  resave: true
}))
 // general config

app.get('/', function(req, res){
  res.send("API initialized")
})

app.get('/sign_up', function(req, res){
  res.send('SignUp')
})

app.post('/login', function(req, res, next){
  User.authenticate(req.body.email, req.body.password, function(err, user){
    if (err) {
      console.log(err);
      console.log("Something went wrong");
    } else {
      req.session.user = user
      return next()
    }
  })
  res.redirect('/main')
})
app.get('/main', function(req, res){
  res.send('/main')
})

app.post('/sign_up', function(req, res){
  if (req.body.username && req.body.password && req.body.passwordConf) {
    let userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf
    }
    User.create(userData, function(err, user){
      if (err){
        res.send(err)
      } else {
        res.send(user)
      }
    });
  }
});

app.listen(port, function(req, res){
  console.log("Connected");
})
