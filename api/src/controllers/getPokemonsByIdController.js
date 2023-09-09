const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');
const { Pokemon, Type } = require('../db')

//Controlador de 2 rutas la que busca por id a la API y la que busca por uuid en la DB

const getPokemonsByIdController = async (id) => {

    //Si es un uuid busca en la db
    if (!Number(id)) {
        console.log('ya entre');

        const pokemon = await Pokemon.findOne({
            where: { id: id },
            include: [
                {
                    model: Type,
                    attributes: ["name"],
                    through: { attributes: [] } // Evita traer los datos de la tabla intermedia si existe
                }]
        })

        console.log(pokemon);
        return pokemon
    }

    //Si es un id(number) busca en la api

    if (Number(id)) {

        const { name, sprites, stats, height, weight, types } = (await axios.get(`${URL_BASE}/${id}`)).data
        const pokemon = {
            id: id,
            name: name,
            //image: sprites.other.home.front_shiny,
            //image: sprites.versions.generation-v.black-white.animated.front_shiny,
            // image: sprites.front_shiny,
            image: sprites.versions['generation-v']['black-white'].animated.front_shiny,
            life: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            speed: stats[5].base_stat,
            height: height,
            weight: weight,
            types: types.map(e => { return { name: e.type.name } })
        }
        return pokemon
    }

    throw Error('Not found')

}
module.exports = getPokemonsByIdController;