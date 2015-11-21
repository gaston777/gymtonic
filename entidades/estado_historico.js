"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_estado_historico: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: DataTypes.STRING(100)
  };
  var Estado_Historico = sequelize.define('Estado_Historico', definition, {
  })
  return Estado_Historico;
};