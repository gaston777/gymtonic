"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_usuario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: DataTypes.STRING(100),
    direccion: DataTypes.STRING(255),
    dni: DataTypes.INTEGER(10),
    id_estado_usuario: DataTypes.INTEGER(1).UNSIGNED,
    id_localidad: DataTypes.INTEGER(10).UNSIGNED,
    mail: DataTypes.STRING(100),
    nyape: DataTypes.STRING(100),
    telefono: DataTypes.STRING(100),
    id_genero: DataTypes.INTEGER(1).UNSIGNED
  };
  var Usuario = sequelize.define('Usuario', definition, {
  })
  return Usuario;
};