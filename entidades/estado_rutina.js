"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_estado_rutina: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: DataTypes.STRING(100)
  };
  var Estado_Rutina = sequelize.define('Estado_Rutina', definition, {
  })
  return Estado_Rutina;
};