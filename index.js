var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname,'/view')));

app.listen(777,function(){
    console.log('started listen port',777);
})