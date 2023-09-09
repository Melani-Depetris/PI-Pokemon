const getAllPokemonsByIdController = require('../controllers/getPokemonsByIdController')

const getPokemonsById = async (req, res) => {

    try {

        let { id } = req.params; //Por acá va a llegar uuid y id
        console.log(id);

        let pokemonById = await getAllPokemonsByIdController(id)

        return pokemonById ?
            res.status(200).json(pokemonById) :
            res.status(404).send('Este Pokemon no existe en la Pokédex')

    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = getPokemonsById;