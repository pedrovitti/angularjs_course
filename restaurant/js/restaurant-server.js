var express = require('express');
var body_parser = require('body-parser');
var app = express();

app.use(body_parser());

app.use(express.static(__dirname + '/public));

app.listen(3412);