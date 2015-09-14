var express = require('express')
  ,mongoose = require('mongoose')
  ,app = express();

var Post = require('./models/post');
var User = require('./models/user');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/mean');

app.get('/', function(req, res){
  res.send('Olá, mundo!!!');
});

app.get('/posts', function(req, res){
  Post.find(function(err, posts){
      res.send(posts);
  });
});

app.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err, post){
    res.send(post);
  });
});

app.get('/users', function(req, res){
  User.find(function(err, users){
    res.send(users);
  });
});

app.listen(5000, function(){
    console.log('Server is running at localhost:5000');
});
