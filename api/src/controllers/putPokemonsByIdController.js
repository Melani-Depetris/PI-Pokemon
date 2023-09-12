const { Pokemon, Type } = require('../db');

const putPokemonsByIdController = async (id, name, image, life, attack, defense, speed, height, weight, types) => {

    await Pokemon.update({

        name: name,
        image: image,
        life: life,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,

    }, {
        where: { id: id }
    })
    //console.log(types);
    //[ { name: 'normal' }, { name: 'rock' } ]

    const pokemonFind = await Pokemon.findOne({
        where: { id: id },
        include:
            [{
                model: Type,
                attributes: ["name"],
                through: { attributes: [] } // Evita traer los datos de la tabla intermedia si existe
            }]
    })

    if (types.length) {

        for (const type of pokemonFind.types) {
            const instanceType = await Type.findOne({ where: { name: type.name } })
            await instanceType.removePokemon(pokemonFind)
        }

        for (const type of types) {
            const instanceType = await Type.findOne({ where: { name: type.name } })
            await instanceType.addPokemon(pokemonFind)
        }
    }

    const pokemonUpdate = await Pokemon.findOne({
        where: { id: id },
        include: [
            {
                model: Type,
                attributes: ["name"],
                through: { attributes: [] } // Evita traer los datos de la tabla intermedia si existe
            }]
    })

    console.log(pokemonUpdate);

    // const pokemon = (pokemonUpdated !== 0) ? pokemonUpdated : 'No update'

    pokemonUpdate.dataValues.source = 'DB';

    return pokemonUpdate
}

module.exports = putPokemonsByIdController;
