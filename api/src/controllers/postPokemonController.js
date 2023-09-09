const { Pokemon, Type } = require('../db');

const postPokemonController = async (name, image, life, attack, defense, speed, height, weight, types) => {
    console.log(types);

    // Valido que llegue toda la info requerida para el newpokemon
    if (name && image && life && attack && defense && speed && height && weight && types) {

        // Uso el metodo findOrCreate de los modelos para buscar en la db si lo tengo, y si no. Crearlo.
        // Construyo el newPokemon  las propiedades del objeto con Shorthand Property Names
        const [newPokemon, created] = await Pokemon.findOrCreate({
            where: {
                name,
            },
            defaults: {
                image,
                life,
                attack,
                defense,
                speed,
                height,
                weight,
            }
        })

        // Acá voy a buscar los types (de Pokémon) en la base de datos según el valor de type que llega por body, que podría ser el tipo del Pokémon que estás creando. Luego, los tipos encontrados en el modelo Type se asocian al newPokemon del modelo Pokemon utilizando el método addType. // Dif
        if(!created){
            throw Error('Este Pokémon ya existe')
        }
        if (types && created) {
            const foundTypes = await Type.findAll({
                where: {
                    name: types
                }
            });
            await newPokemon.addType(foundTypes) 
        }

        // const pokemonsAll = await Pokemon.findAll()

        const result = created ? newPokemon : 'Ya existe en la Pokédex';
        return result

    }
    throw Error('Faltan datos')
}
module.exports = postPokemonController;