"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + '/../config/config.json')[env];
//orm sequielize
var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    logging: console.log,
    define: {
      timestamps: false
    },
    pool: {
    maxConnections: 20,
    maxIdleTime: 30000
    }
  }
);

var entidades = [
  'Usuario',
  'Estado_Usuario',
  'Genero',
  'Localidad',
  'Provincia',
  'Pais',
  'Historico_Usuario',
  'Estado_Historico',
  'Rutina',
  'Estado_Rutina',
  'Ejercicio',
  'Estado_Ejercicio',
  'Rutina_por_Usuario',
  'Ejercicio_por_Rutina',
  'Ejercicio_Usuario_Guardado'
];

entidades.forEach(function(entidad) {
  module.exports[entidad] = sequelize.import(__dirname + '/' + entidad);
});

// relaciones de las entidades
(function(entidades) {
  entidades.Estado_Usuario.hasOne(entidades.Usuario, { foreignKey: 'id_estado_usuario' , foreignKeyConstraint:true });
  entidades.Genero.hasOne(entidades.Usuario, { foreignKey: 'id_genero' , foreignKeyConstraint:true });
  entidades.Localidad.hasOne(entidades.Usuario, { foreignKey: 'id_localidad' , foreignKeyConstraint:true });
  entidades.Pais.hasOne(entidades.Provincia, { foreignKey: 'id_pais' , foreignKeyConstraint:true });
  entidades.Provincia.hasOne(entidades.Localidad, { foreignKey: 'id_provincia' , foreignKeyConstraint:true });
  entidades.Estado_Historico.hasOne(entidades.Historico_Usuario, { foreignKey: 'id_estado_historico' , foreignKeyConstraint:true });
  entidades.Usuario.hasMany(entidades.Historico_Usuario, { foreignKey: 'id_usuario' , foreignKeyConstraint:true });
  entidades.Estado_Rutina.hasOne(entidades.Rutina, { foreignKey: 'id_estado_rutina' , foreignKeyConstraint:true });
  entidades.Estado_Ejercicio.hasOne(entidades.Ejercicio, { foreignKey: 'id_estado_ejercicio' , foreignKeyConstraint:true });
  entidades.Usuario.hasMany(entidades.Rutina_por_Usuario, { foreignKey: 'id_usuario' , foreignKeyConstraint:true });
  entidades.Rutina.hasMany(entidades.Rutina_por_Usuario, { foreignKey: 'id_rutina' , foreignKeyConstraint:true });
  entidades.Rutina.hasMany(entidades.Ejercicio_por_Rutina, { foreignKey: 'id_rutina' , foreignKeyConstraint:true });
  entidades.Ejercicio.hasMany(entidades.Ejercicio_por_Rutina, { foreignKey: 'id_ejercicio' , foreignKeyConstraint:true });
  entidades.Usuario.hasMany(entidades.Ejercicio_Usuario_Guardado, { foreignKey: 'id_usuario' , foreignKeyConstraint:true });
  entidades.Ejercicio_por_Rutina.hasMany(entidades.Ejercicio_Usuario_Guardado, { foreignKey: 'id_ejercicio_por_rutina' , foreignKeyConstraint:true });

})(module.exports);

// export connection
module.exports.sequelize = sequelize;
