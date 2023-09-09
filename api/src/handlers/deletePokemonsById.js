const deletePokemonsByIdController = require('../controllers/deletePokemonsByIdController');

const deletePokemonsById = (req, res) => {
    const { id } = req.params;

    try {
        const pokemonDel = deletePokemonsByIdController(id)
        res.status(200).json(pokemonDel)

    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = deletePokemonsById;
