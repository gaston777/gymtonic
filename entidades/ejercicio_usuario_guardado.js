"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_ejercicio_usuario_guardado: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: DataTypes.INTEGER(10).UNSIGNED,
    id_ejercicio_por_rutina: DataTypes.INTEGER(10).UNSIGNED,
    repeticiones: DataTypes.INTEGER(2).UNSIGNED,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE
  };
  var Ejercicio_Usuario_Guardado = sequelize.define('Ejercicio_Usuario_Guardado', definition, {
  })
  return Ejercicio_Usuario_Guardado;
};