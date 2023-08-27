const URL_BASE_TYPES = 'https://pokeapi.co/api/v2/type';
const axios = require('axios')

const types = async(req, res) => {
    try {
        const {results} = await axios.get(URL_BASE_TYPES).data

        let allTypes= [];
const typesPokemons = results.map(e => allTypes.push(e.name))
console.log(allTypes);
res.status(200).json(allTypes)
    } catch (error) {

    }
};
module.exports = types;