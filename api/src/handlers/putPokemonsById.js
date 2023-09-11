const putPokemonsByIdController = require('../controllers/putPokemonsByIdController');

const putPokemonsById = async (req, res) => {

    try {
        const { id, name, image, life, attack, defense, speed, height, weight, types } = req.body;

        const pokemonUpdated = await putPokemonsByIdController(id, name, image, life, attack, defense, speed, height, weight, types)

        res.status(200).json(pokemonUpdated)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = putPokemonsById;
