"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_pais: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: DataTypes.STRING(100)
  };
  var Pais = sequelize.define('pais', definition, {
  })
  return Pais;
};