var express = require('express');
var body_parser = require('body-parser');
var app = express();

app.use(body_parser());

app.use(express.static(__dirname + '/public'));

var pedidos = {
    "1": [
        {
            "id": "mussarela",
            "quantity": 2
        },
        {
            "id": "mussarela",
            "quantity": 2
        },
        {
            "id": "mussarela",
            "quantity": 2
        }
    ],
    "2": [
        {
            "id": "camarao",
            "quantity": 1
        },
        {
            "id": "marguérita",
            "quantity": 1
        },
        {
            "id": "camarao",
            "quantity": 1
        }
    ]
};

app.get('/pedidos', function(req, res) {
    res.charset = "utf-8";
    res.pedro = "testeeee-8";
    res.json(pedidos);
});

app.listen(3412);