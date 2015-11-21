"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_historico_usuario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: DataTypes.INTEGER(10).UNSIGNED,
    peso: DataTypes.DECIMAL(10,2),
    altura: DataTypes.DECIMAL(10,2),
    fecha_actualizacion: DataTypes.DATE,
    id_estado_historico: DataTypes.INTEGER(1).UNSIGNED
  };
  var Historico_Usuario = sequelize.define('Historico_Usuario', definition, {
  })
  return Historico_Usuario;
};