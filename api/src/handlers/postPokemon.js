const postPokemonController = require('../controllers/postPokemonController')

const postPokemon = async (req, res) => {

    const { name, image, life, attack, defense, speed, height, weight, types } = req.body; // Destructuro de req.body todos los datos que necesito del nuevo personaje que voy a postear en la db
    // console.log(req.body);

    //Ejemplo de "uuid":  "2edcae21-b4ad-43dd-a747-130c52e2866d",

    try {

        let postPokemon = await postPokemonController( name, image, life, attack, defense, speed, height, weight, types)

        res.status(201).json(postPokemon)

    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
};

module.exports = postPokemon;