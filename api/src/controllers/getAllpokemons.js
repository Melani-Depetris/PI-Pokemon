const axios = require('axios');
const { Pokemon, Type } = require('../db')

//En este array voy a guardar todos los pokemos que vienen de la api.
let allPokemonsApi = [];

const getAllpokemons = async (req, res) => {


    try {
        //API pokemon
        // Este if es para que a las peticiones las haga una sola vez.
        if (allPokemonsApi.length === 0) {
            let URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

            let urlAll = [];
            let count = 0
            // Itera peticiones a la api destructurando next y results, para sacarle la info a results y pushearla en un array. Y el next para reasignar el valor de URL_BASE
            while (URL_BASE && count < 3) {
                const { next, results } = (await axios.get(URL_BASE)).data

                for (obj of results) {
                    urlAll.push(obj.url)
                }
                count++

                URL_BASE = next
            }

            // axiosAll es un array que guarda todas las urls con su promesa
            const axiosAll = urlAll.map(e => axios(e))

            //resPromise contiene los datos de cada una de las peticiones a la API
            //Promise.all ejecuta todas las promesas y las guarda en resPromise
            //contiene la response completa
            const resPromise = await Promise.all(axiosAll)

            //allPokemonsApi es el array de objetos que contiene la info de los pokemons 
            allPokemonsApi = [...resPromise.map(e => {
                return {
                    id: e.data.id,
                    name: e.data.name,
                    // image: e.data.sprites.other.home.front_shiny,
                    // imagen: e.data.sprites.other.dream_world.front_default,
                    image: e.data.sprites.front_shiny,
                    life: e.data.stats[0].base_stat,
                    attack: e.data.stats[1].base_stat,
                    defense: e.data.stats[2].base_stat,
                    speed: e.data.stats[5].base_stat,
                    height: e.data.height,
                    weight: e.data.weight,
                    types: e.data.types.map(e => { return { name: e.type.name } }),
                    source: 'API'
                }
            })]
        }

        //Busca en la db los pokemons creados
        let allPokemonsDb = await Pokemon.findAll({
            // include: {          // y le incluye su type
            //     model: Type,
            //     attibutes: ["name"],
            //     through: { attributes: [] } //Evita traer los datos de la tabla intermedia si existe
            // }
            include: [ // y le incluye su type
                {
                    model: Type,
                    attributes: ["name"],
                    through: { attributes: [] } //Evita traer los datos de la tabla intermedia si existe
                }]
        })

        allPokemonsDb.map(pokemon => {
            // Agrega el origen "DB" a los Pokémon de la base de datos
            pokemon.dataValues.source = 'DB';
            return pokemon.dataValues;
        })

        // Asocio la info de estos arrays
        let allPokemons = [...allPokemonsApi, ...allPokemonsDb]

        //Respondo con todos los pokemons
        res.status(200).json(allPokemons);
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = getAllpokemons;











