"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_provincia: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: DataTypes.STRING(100),
    id_pais: DataTypes.INTEGER(10).UNSIGNED
  };
  var Provincia = sequelize.define('provincia', definition, {
  })
  return Provincia;
};