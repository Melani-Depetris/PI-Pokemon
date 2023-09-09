const getAllPokemonsController = require('../controllers/getAllPokemonsController')

const getAllpokemons = async (req, res) => {
    try {

        const allPokemons = await getAllPokemonsController()
        //Respondo con todos los pokemons
        res.status(200).json(allPokemons);
   
    } catch (error) {

        res.status(500).send(error.message)
    }
}
module.exports = getAllpokemons;