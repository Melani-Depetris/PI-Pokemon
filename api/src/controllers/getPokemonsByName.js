const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');
const { Pokemon, Type } = require('../db');

//Controlador que busca por name en la API y en la DB, la data vien epor query.
//Ejemplo: http://localhost:3001/pokemons/name?name={name}

const getPokemonsByName = async (req, res) => {

    console.log(req);
    try {
        let { name } = req.query;
        name = name.toLowerCase(); // Convierto todos los caracteres a minúsculas

        //Busca en la db el pokemon por name que llega por query
        const pokemon = await Pokemon.findOne({
            where: { name: name }, 
            include: [ 
            {
                model: Type,
                attributes: ["name"],
                through: { attributes: [] } // Evita traer los datos de la tabla intermedia si existe
            }]
        })
        //Responde con el pokemon
        if (pokemon) {
            res.status(200).json(pokemon)

        //Busca en la api el pokemon por name que llega por query
        } else {
            const { id, sprites, stats, height, weight, types } = (await axios.get(`${URL_BASE}/${name}`)).data
            const pokemon = {
                id: id,
                name: name,
                //image: sprites.other.home.front_shiny,
                image: sprites.front_shiny,
                life: stats[0].base_stat,
                attack: stats[1].base_stat,
                defense: stats[2].base_stat,
                speed: stats[5].base_stat,
                height: height,
                weight: weight,
                types: types.map(e => e.type.name)
            }

            return pokemon ?
                res.status(200).json(pokemon) : //Responde con el pokemon

                res.status(404).send('Este Pokemon no existe en la Pokédex')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = getPokemonsByName;