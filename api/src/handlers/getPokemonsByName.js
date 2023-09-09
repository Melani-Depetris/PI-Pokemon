const getPokemonsByNameController = require('../controllers/getPokemonsByNameController')

const getPokemonsByName = async (req, res) => {

    console.log(req);
    try {

        let { name } = req.query;
        name = name.toLowerCase(); // Convierto todos los caracteres a minúsculas

        let pokemonByName = await getPokemonsByNameController(name)

        res.status(200).json(pokemonByName)

    } catch (error) {

        res.status(500).send(error.message)
    }
};

module.exports = getPokemonsByName;