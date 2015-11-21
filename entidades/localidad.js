"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_localidad: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: DataTypes.STRING(100),
    id_provincia: DataTypes.INTEGER(10).UNSIGNED
  };
  var Localidad = sequelize.define('localidade', definition, {
  })
  return Localidad;
};