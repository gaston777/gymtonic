"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_ejercicio_por_rutina: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    id_rutina: DataTypes.INTEGER(10).UNSIGNED,
    id_ejercicio: DataTypes.INTEGER(10).UNSIGNED,
    nombre: DataTypes.STRING(100),
    repeticiones: DataTypes.INTEGER(2).UNSIGNED,
    series: DataTypes.INTEGER(2).UNSIGNED,
    tiempo_por_serie: DataTypes.INTEGER(2).UNSIGNED,
  };
  var Ejercicio_por_Rutina = sequelize.define('Ejercicio_por_Rutina', definition, {
  })
  return Ejercicio_por_Rutina;
};