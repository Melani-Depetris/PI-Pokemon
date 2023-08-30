const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');
const { Pokemon } = require('../db')


//Controlador de 2 rutas la que busca por id a la API y la que busca por uuid en la DB

const getPokemonsById = async (req, res) => {

    try {
        let { id } = req.params; //Por acá va a llegar uuid y id
     
//Si es un uuid busca en la db
        if (!Number(id)) {
            const pokemon = await Pokemon.findOne({
                where: { uuid: id }
            })
            res.status(200).json(pokemon)
        }
        
//Si es un id(number) busca en la api

        if (Number(id)) {

            const { name, sprites, stats, height, weight, types } = (await axios.get(`${URL_BASE}/${id}`)).data
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
                res.status(200).json(pokemon) :
                res.status(404).send('Este Pokemon no existe en la Pokédex')
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = getPokemonsById;