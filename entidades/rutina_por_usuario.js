"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_rutina_por_usuario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: DataTypes.INTEGER(10).UNSIGNED,
    id_rutina: DataTypes.INTEGER(10).UNSIGNED,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE
  };
  var Rutina_por_Usuario = sequelize.define('Rutina_por_Usuario', definition, {
  })
  return Rutina_por_Usuario;
};