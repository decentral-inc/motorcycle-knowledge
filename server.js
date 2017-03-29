//Everybody wants to be a bodybuilder but no one wanna lift some heavy ass weight!
//--Ronnie Coleman
var express = require('express');
var config = require('./config/config.js');
var app = express();
var port = process.env.PORT || config.PRODUCTION_DEBUG_PORT;

app.use(express.static(__dirname+'/src'));
app.listen(port,function (){
  console.log("Motorcycle Knowledge is running at localhost:" + port)
});