const deletePokemonsByIdController = require('../controllers/deletePokemonsByIdController');

const deletePokemonsById = async (req, res) => {
    const { id } = req.params;

    try {
        const pokemonDel = await deletePokemonsByIdController(id)
        console.log(pokemonDel);
        res.status(200).send(pokemonDel)

    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = deletePokemonsById;
