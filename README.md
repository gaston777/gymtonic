GymTonic
========

* Instacion
$ npm install en C:\gymtonic
* Iniciar mongo server (en consola 1)
mongod --dbpath gymtonic\mongodb\data\db
$ npm start en C:\gymtonic (en consola 2)




Tecnologías 

* Node.js RESTful API with express. Uso de domain y cluster.
* MongoDB and mongoose
* Redis




Idea de partida
* Crear una API RESTful que responda a los casos CRUD.
* La base de datos utilizadas será MongoDB.
* Utilizar token para validar la seguridad
* Utilizar patrones de diseno
     


Rutas:

GET
* GET /rutinas - muestra una lista con todas las rutinas
* GET /rutinas/:id - muestra los detalles de una rutina

POST
* POST /rutinas - crea una rutina
* -- body: id (obligatorio), images, tipo (obligatorio - sólo permite: 'Semanal', 'Mensual', 'Trimestral'. 'Semestral', 'Anual'), tiempo (obligatorio - sólo permite: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100), estado (sólo permite: 0, 1), descripcion

PUT
* PUT /rutinas/:id - modifica una rutina
* -- body: id (obligatorio), images, tipo (obligatorio - sólo permite: 'Semanal', 'Mensual', 'Trimestral'. 'Semestral', 'Anual'), tiempo (obligatorio - sólo permite: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100), estado (sólo permite: 0, 1), descripcion

DELETE
* DELETE /rutinas/:id - elimina una rutina
    
