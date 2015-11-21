"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_estado_usuario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: DataTypes.STRING(100)
  };
  var Estado_Usuario = sequelize.define('Estado_Usuario', definition, {
  })
  return Estado_Usuario;
};