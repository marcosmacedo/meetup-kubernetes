var express = require('express');
const uuidv1 = require('uuid/v1');
var app = express();

//Se genera un UUID para esta instancia de la aplicación
var uuid = uuidv1();

app.get('/', function (req, res) {
  res.send("ID App: "+uuid);
});

app.get('/crash', function (req, res) {
    res.send("<html><img src='https://i.imgflip.com/2dnbh1.jpg'></html>");
    process.exit(-1)
});

app.listen(8000, "0.0.0.0", function () {
  console.log('Escuchando en el puerto 8000..');
});
