const { Pokemon } = require('../models/Pokemon');

const postPokemon = async (req, res) => {

    const { id, name, image, life, height, attack, defense, speed, weight  } = req.body;
    console.log(req.body);

    try {

        if (id && name && image && life && attack && defense && speed && height && weight ) {

            const [pokemon, created] = await Pokemon.findOrCreate({
                where: {
                    id: id,
                },
                defaults: {

                    name: name,
                    image: image,
                    life: hp,
                    attack: attack,
                    defense: defense,
                    speed: speed,
                    height: height,
                    weight: weight
                }
            })

            const pokemonsAll = await Pokemon.findAll()

            created ? res.status(201).json(pokemonsAll) : res.status(200).send('Ya existe')

        } else {
            res.status(401).send('Faltan datos')
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = postPokemon;