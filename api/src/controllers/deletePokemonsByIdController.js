const { Pokemon, Type } = require('../db')

const detelePokemonsById = async (id) => {

    await Pokemon.destroy({
        where: {
            id: id
        },
        force: true,
        include: [{
            model: Type,
        }]
    });

    const pokemons = Pokemon.findAll()

    return pokemons

}
module.exports = detelePokemonsById