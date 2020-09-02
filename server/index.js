var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var db = require('../database-mongo/index.js')
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var item = require('../database-mongo');
mongoose.Promise = global.Promise

var app = express();
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/items', function (req, res) {
  console.log(req.body.myData.name)
  var newItem = new item({name:req.body.myData.name,price:req.body.myData.price})
  newItem.save()
});

app.get('/lubna',function(req,res){
  item.find({}).then(function(result){
    res.send(result)
  })
})

app.listen(8000, function() {
  console.log('listening on port 8000!');
});

