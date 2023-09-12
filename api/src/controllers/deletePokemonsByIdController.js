const { Pokemon, Type } = require('../db')

const detelePokemonsById = async (id) => {

    const pokemonDel = await Pokemon.destroy({
        where: {
            id: id
        },
        force: true,
        include: [{
            model: Type,
        }]
    });

    // const pokemons = Pokemon.findAll()

    const pokemon = (pokemonDel !== 0) ? 'Deleted Pokémon!' : 'Pokemón Undefined' 

    return pokemon

}
module.exports = detelePokemonsById