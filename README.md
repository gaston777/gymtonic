GymTonic
========

* Instacion
$ npm install en la carpeta donde crean el proyecto


Tecnologías 

* Node.js Server
* Framework ORM Sequelize (Postgres, MySQL, MariaDB, SQLite y Microsoft SQL Server)
* RESTful API
* Posibilidad de responder (Json, XML, text, text/html)
* Express 4
* Apache2 Server PHP
* Framework Codeigniter PHP


Idea de partida
* Crear una API RESTful que responda a los casos CRUD.
* La base de datos utilizadas será Mysql.
* Utilizar token para validar la seguridad
* Utilizar patrones de diseno
* Concepto de Mapeo de Entidades / DB
* Portabilidad


Controladores:

app.post('/usuario/ingresar', usuario.ingresar);
app.get('/usuario/buscarTodos', usuario.buscarTodos);
app.post('/usuario/buscarPorId', usuario.buscarPorId);
app.post('/usuario/crear', usuario.crear);
app.patch('/usuario/actualizar', usuario.actualizar);
app.put('/usuario/actualizar', usuario.actualizar);
app.delete('/usuario/borrar', usuario.borrar);

app.get('/rutinas/buscarTodos', rutinas.buscarTodos);
app.post('/rutinas/buscarPorId', rutinas.buscarPorId);
app.post('/rutinas/crear', rutinas.crear);
app.patch('/rutinas/actualizar', rutinas.actualizar);
app.put('/rutinas/actualizar', rutinas.actualizar);
app.delete('/rutinas/borrar', rutinas.borrar);
    
