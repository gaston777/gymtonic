"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_estado_ejercicio: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: DataTypes.STRING(100)
  };
  var Estado_Ejercicio = sequelize.define('Estado_Ejercicio', definition, {
  })
  return Estado_Ejercicio;
};