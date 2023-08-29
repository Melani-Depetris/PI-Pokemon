const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('type', {

    id: { //uuid
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { timestamps: false });
};
/*ENUM('normal', 'fighting', 'flying',
'poison', 'ground', 'rock',
'bug', 'ghost', 'steel',
'fire', 'water', 'grass',
'electric', 'psychic', 'ice',
'dragon', 'dark', 'fairy',
'unknown', 'shadow')*/