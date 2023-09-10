const { Pokemon, Type } = require('../db');

const putPokemonsByIdController = async (id, name, image, life, attack, defense, speed, height, weight, types) => {

    const pokemonUpdated = await Pokemon.update({

        name: name,
        image: image,
        life: life,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
        types: types

    }, {
        where: { id: id }
    })

    const pokemon = pokemonUpdated !== 0 ? pokemonUpdated : 'No update'
    return pokemon
}

module.exports = putPokemonsByIdController;
