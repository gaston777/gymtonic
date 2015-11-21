var entidad = require("../entidades");
var respuesta = require("../response/response.js");

exports.buscarTodos = function(req, res) {
    entidad.Rutina.findAll().then(function(rutinas) {
        respuesta.responder(req, res, rutinas);
    });
};
exports.buscarPorId = function(req, res) {
    var paramId = req.body.id;
    entidad.Rutina.findById(paramId).then(function(rutinas) {
        respuesta.responder(req, res, rutinas);
    });
};
exports.crear = function(req, res) {
    var paramUsuario = req.body.usuario;
    var paramClave = req.body.clave;
    var paramDireccion = req.body.direccion;
    var paramDni = req.body.dni;
    var paramEstado = req.body.estado;
    var paramLocalidad = req.body.localidad;
    var paramMail = req.body.mail;
    var paramNyape = req.body.nyape;
    var paramTelefono = req.body.telefono;
    var paramGenero = req.body.genero;
    entidad.Usuario.create({
        usuario: paramUsuario,
        clave: paramClave,
        direccion: paramDireccion,
        dni: paramDni,
        id_estado_usuario: paramEstado,
        id_localidad: paramLocalidad,
        mail: paramMail,
        nyape: paramNyape,
        telefono: paramTelefono,
        id_genero: paramGenero
    }).then(function(usuarios) {
        respuesta.responder(req, res, usuarios);
    }).catch(function(error) {
        console.log("error: " + error);
        res.status(500).json({
            error: 'error'
        });
    });
};
exports.actualizar = function(req, res) {
    var paramId =  req.body.id;
    var paramUsuario = req.body.usuario;
    var paramClave = req.body.clave;
    var paramDireccion = req.body.direccion;
    var paramDni = req.body.dni;
    var paramEstado = req.body.estado;
    var paramLocalidad = req.body.localidad;
    var paramMail = req.body.mail;
    var paramNyape = req.body.nyape;
    var paramTelefono = req.body.telefono;
    var paramGenero = req.body.genero;
    entidad.Usuario.update({
        usuario: paramUsuario,
        clave: paramClave,
        direccion: paramDireccion,
        dni: paramDni,
        id_estado_usuario: paramEstado,
        id_localidad: paramLocalidad,
        mail: paramMail,
        nyape: paramNyape,
        telefono: paramTelefono,
        id_genero: paramGenero
    },{
        where: {
            id_usuario: paramId
        }
    }).then(function(usuarios) {
        respuesta.responder(req, res, usuarios);
    });
};
exports.borrar = function(req, res) {
    var paramId = req.body.id;
    entidad.Rutina.destroy({
        where: {
            id_rutina: paramId
        }
    }).then(function(data) {
        respuesta.responder(req, res, data);
    });
};