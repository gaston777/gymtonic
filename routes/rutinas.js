module.exports = function(app) {

  var Rutinas = require('../models/rutinas.js');

  //GET - Devuelve todas las Rutinass en la DB
  buscarTodos = function(req, res) {
    console.log("GET - /rutinas");
  	return Rutinas.find(function(err, Rutinas) {
  		if(!err) {
  			return res.send(Rutinas);
  		} else {
        res.statusCode = 500;
  			console.log('Error interno (%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Error en el servidor' });
  		}
  	});
  };

  //GET - Buscar una Rutina por un ID
  buscarPorId = function(req, res) {
    console.log("GET - /rutinas/:id");
    return Rutinas.findById(req.params.id, function(err, Rutinas) {
      if(!Rutinas) {
        res.statusCode = 404;
        return res.send({ error: 'No encontrado' });
      }
      if(!err) {
        // Send { status:OK, Rutinas { Rutinas values }}
        return res.send({ status: 'OK', Rutinas:Rutinas });
        // Send {Rutinas values}
        // return res.send(Rutinas);
      } else {
        res.statusCode = 500;
        console.log('Error interno (%d): %s',res.statusCode,err.message);
        return res.send({ error: 'Error en el servidor' });
      }
    });
  };

  //POST - Insertar nuevas Rutinas en la DB
  agregarRutinas = function(req, res) {
    console.log('POST - /rutinas');
    console.log(req.body);

    var Rutinas = new Rutinas({
      model:    req.body.model,
      images :  req.body.images, 
      style:    req.body.style,
      size :    req.body.size, 
      colour:   req.body.colour, 
      price:    req.body.price,
      summary:  req.body.summary  
    });

    Rutinas.save(function(err) {
      if(!err) {
        console.log("Rutinas creadas con exito");
        return res.send({ status: 'OK', Rutinas:Rutinas });
      } else {
        console.log(err);
        if(err.name == 'ValidationError') {
          res.statusCode = 400;
          res.send({ error: 'Validation error' });
        } else {
          res.statusCode = 500;
          res.send({ error: 'Error en el servidor' });
        }
        console.log('Error Interno(%d): %s',res.statusCode,err.message);
      }
    });
  };

  //PUT - Actualizar una rutina existente
  actualizarRutinas = function(req, res) {
    console.log("PUT - /rutinas/:id");
    console.log(req.body);
    return Rutinas.findById(req.params.id, function(err, Rutinas) {
      if(!Rutinas) {
        res.statusCode = 404;
        return res.send({ error: 'No encontrado' });
      }

      if (req.body.model != null) Rutinas.model = req.body.model;
      if (req.body.price != null) Rutinas.price = req.body.price;
      if (req.body.images != null) Rutinas.images = req.body.images; 
      if (req.body.style != null) Rutinas.style = req.body.style;
      if (req.body.size != null) Rutinas.size  = req.body.size;
      if (req.body.colour != null) Rutinas.colour = req.body.colour;
      if (req.body.summary != null) Rutinas.summary = req.body.summary;

      return Rutinas.save(function(err) {
        if(!err) {
          console.log('Actualizado');
          return res.send({ status: 'OK', Rutinas:Rutinas });
        } else {
          if(err.name == 'ValidationError') {
            res.statusCode = 400;
            res.send({ error: 'Validation error' });
          } else {
            res.statusCode = 500;
            res.send({ error: 'Error en el servidor' });
          }
          console.log('Error Interno(%d): %s',res.statusCode,err.message);
        }
      });
    });
  }

  //DELETE - Borrar Rutinas con un ID especifico
  borrarRutinas = function(req, res) {
    console.log("DELETE - /rutinas/:id");
    return Rutinas.findById(req.params.id, function(err, Rutinas) {
      if(!Rutinas) {
        res.statusCode = 404;
        return res.send({ error: 'No encontrado' });
      }

      return Rutinas.remove(function(err) {
        if(!err) {
          console.log('Rutina eliminada');
          return res.send({ status: 'OK' });
        } else {
          res.statusCode = 500;
          console.log('Error Interno(%d): %s',res.statusCode,err.message);
          return res.send({ error: 'Error en el servidor' });
        }
      })
    });
  }

  //rutas y funciones
  app.get('/rutinas', buscarTodos);
  app.get('/rutinas/:id', buscarPorId);
  app.post('/rutinas', agregarRutinas);
  app.put('/rutinas/:id', actualizarRutinas);
  app.delete('/rutinas/:id', borrarRutinas);

}


