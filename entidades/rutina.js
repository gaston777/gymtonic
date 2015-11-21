"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_rutina: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING(100),
    descripcion: DataTypes.STRING(255),
    id_estado_rutina: DataTypes.INTEGER(1).UNSIGNED
  };
  var Rutina = sequelize.define('Rutina', definition, {
  })
  return Rutina;
};