"use strict";

module.exports = function(sequelize, DataTypes) {
    var definition = {
    id_usuario: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true
    },
    usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
        validate: {
            max: 100
        }
    },
    clave: {
      type: DataTypes.STRING(100),
      allowNull: false,
        validate: {
            max: 100
        }
    },
    direccion: DataTypes.STRING(255),
    dni: DataTypes.INTEGER(10),
    id_estado_usuario: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
        validate: {
            max: 1
        }
    },
    id_localidad: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
        validate: {
            max: 10
        }
    },
    mail: DataTypes.STRING(100),
    nyape: DataTypes.STRING(100),
    telefono: DataTypes.STRING(100),
    id_genero: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
        validate: {
            max: 1
        }
    }
  };

  var Usuario = sequelize.define('Usuario', definition, {
  })
  return Usuario;
};