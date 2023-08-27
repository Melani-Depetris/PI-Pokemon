const URL_BASE_TYPES = 'https://pokeapi.co/api/v2/type';
const axios = require('axios')
const Type = require('../models/Type')

const types = async (req, res) => {
    try {

        const { results } = (await axios.get(URL_BASE_TYPES)).data

        const typesPokemon = results.map(e => e.name)

        // const createTypes = await Type.bulkCreate(typesPokemon)

        return typesPokemon ?
            res.status(200).json(typesPokemon) :
            res.status(400).send('Not found')


    } catch (error) {
        res.status(500).send(error.message)
    }
};
module.exports = types;