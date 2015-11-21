"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_ejercicio: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING(100),
    descripcion: DataTypes.STRING(255),
    id_estado_ejercicio: DataTypes.INTEGER(1).UNSIGNED
  };
  var Ejercicio = sequelize.define('Ejercicio', definition, {
  })
  return Ejercicio;
};