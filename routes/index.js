var express = require('express');
//we added memeImage to require the JSON file.
var memeImage = require('../data/memes.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to our Meme Page!' });
});

router.get('/getMemes', function(req, res, next){
  console.log("ahhhhhh!");
  //this line is rendering the JSON data into Jade
  res.render('memes', {memeImg : memeImage});
});

//router.get('/getMemesJSON', function(req, res, next){
//  res.send(memeImage);
//});

module.exports = router;
