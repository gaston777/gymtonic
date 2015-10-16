// Incluímos las dependencias que vamos a usar,
// importamos Express
// con http creamos el servidor que posteriormente escuchará en el puerto 3000
var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app),
    path    = require('path'),
    log     = require('./libs/log')(module),
    config  = require('./libs/config');
    mongoose = require("mongoose");

// Configuramos la app para que pueda realizar métodos REST
// con bodyParser() permitimos que pueda parsear JSON
// con methodOverride() nos permite implementar y personalizar métodos HTTP
// app.router nos permite crear rutas personalizadas
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.use(function(req, res, next){
    res.status(404);
    log.debug('URL no encontrada: %s',req.url);
    res.send({ error: 'No encontrada' });
    return;
});

// debug
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Error interno (%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

// Conexión
mongoose.connect('mongodb://localhost/gymtonic', function(err, res) {
	if(err) {
		console.log('ERROR: Conectando a la db.' + err);
	} else {
		console.log('Conectado a la db.');
	}
});

// petición GET del root que sólo muestre "root!"
app.get('/', function(req, res) {
  res.send("root");
});

app.all('/*', function(req, res, next) {
  // headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // custom headers
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// El servidor escucha en el puerto 3000
server.listen(3000, function() {
  console.log("Corriendo en http://localhost:3000");
});

// rutas
routes = require('./routes/rutinas')(app);