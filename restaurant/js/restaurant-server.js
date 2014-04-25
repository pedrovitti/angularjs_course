var express = require('express');
var body_parser = require('body-parser');
var path = require('path');
var app = express();

app.use(body_parser());

app.use(express.static(path.join(__dirname, '../')));

app.listen(3412);
