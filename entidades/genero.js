"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_genero: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: DataTypes.STRING(100)
  };
  var Genero = sequelize.define('Genero', definition, {
  })
  return Genero;
};