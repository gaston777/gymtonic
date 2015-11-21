var express = require("express");
var log = require('./libs/log')(module);
var http = require('http');
var path = require('path');
var cors = require('cors');

/* modelos */
var usuario = require('./modelos/usuario');
var rutinas = require('./modelos/rutinas');

/* entidades */
var entidades = require("./entidades");

/* libreria sequilize db */
var Sequelize = require('sequelize');
var app = express();

app.set('port', process.env.PORT || 3000);
/* view engine ejs */
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

//view engine php
//var phpnode = require('php-node')({bin:"C:\\xampp2\\php\\php.exe"});
//app.engine('php', phpnode);
//app.set('view engine', 'php');

// Core module config 
var corsOptions = {
  origin: '*',
  preflightContinue: true  // <- I am assuming this is correct 
};

app.use(cors(corsOptions));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
    var err = new Error('No encontrado');
    err.status = 404;
    next(err);
});


/* Controladores */

//GET Recupera un objeto de un recurso en particular o una lista de todos los objetos
//POST Crea un objeto de un nuevo recurso
//PATCH Actualiza parcialmente un objeto de un recurso en particular
//PUT Actualiza completamente un objeto de un recurso en particular
//DELETE Elimina un objeto de un recurso en particular

/* HTTP status codes */
//200 OK
//201 Creado
//203 Sin contenido
//206 Contenido parcial
//400 Solicitud incorrecta
//401 No autorizado
//403 Prohibido
//404 No encontrado
//408 Tiempo de espera agotado
//500 Error interno
//501 No implementado
//503 Servicio no disponible

app.post('/usuario/ingresar', usuario.ingresar);
app.get('/usuario/buscarTodos', usuario.buscarTodos);
app.post('/usuario/buscarPorId', usuario.buscarPorId);
app.post('/usuario/crear', usuario.crear);
app.patch('/usuario/actualizar', usuario.actualizar);
app.put('/usuario/actualizar', usuario.actualizar);
app.delete('/usuario/borrar', usuario.borrar);

app.get('/rutina/buscarTodos', rutinas.buscarTodos);
app.post('/rutina/buscarPorId', rutinas.buscarPorId);
app.post('/rutina/crear', rutinas.crear);
app.patch('/rutina/actualizar', rutinas.actualizar);
app.put('/rutina/actualizar', rutinas.actualizar);
app.delete('/rutina/borrar', rutinas.borrar);

//entidades.sequelize.sync({force: true}).then(function() {
entidades.sequelize.sync().then(function() {
    http.createServer(app).listen(app.get('port'), function() {
        console.log('Corriendo en el puerto: ' + app.get('port'));
    });
});