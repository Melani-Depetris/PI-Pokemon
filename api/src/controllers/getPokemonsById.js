const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';
const axios = require('axios');
const { Pokemon, Type } = require('../db')


//Controlador de 2 rutas la que busca por id a la API y la que busca por uuid en la DB

const getPokemonsById = async (req, res) => {

    try {
        let { id } = req.params; //Por acá va a llegar uuid y id
        console.log(id);

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

            // const pokemon = await Pokemon.findByPk(id, {
            //     include: {
            //         model: Type,
            //         attributes: ["name"]
            //     }

            // })

            console.log(pokemon);
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
                types: types.map(e => {return {name: e.type.name}})

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