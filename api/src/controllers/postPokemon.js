const { Pokemon, Type } = require('../db');

const postPokemon = async (req, res) => {

    const { name, image, life, attack, defense, speed, height, weight, type } = req.body; // Destructuro de req.body todos los datos que necesito del nuevo personaje que voy a postear en la db
    console.log(req.body);

    //Ejemplo de "uuid":  "2edcae21-b4ad-43dd-a747-130c52e2866d",

    try {
        // Valido que llegue toda la info requerida para el newpokemon
        if (name && image && life && attack && defense && speed && height && weight) {

            // Uso el metodo findOrCreate de los modelos para buscar en la db si lo tengo, y si no. Crearlo.
            // Construyo el newPokemon  las propiedades del objeto con Shorthand Property Names
            const [newPokemon, created] = await Pokemon.findOrCreate({
                where: {
                    name: name,
                },
                defaults: {
                    image,
                    life,
                    attack,
                    defense,
                    speed,
                    height,
                    weight
                }
            })

if(type){
    const foundTypes = await Type.findAll({
        where: {
          name: type
        }
      });
      await newPokemon.setTypes(foundTypes)
}

            // const pokemonsAll = await Pokemon.findAll()

            created ? res.status(201).json(newPokemon)/*.send('Nuevo pokemon en la Pokédex ')*/ : res.status(200).send('Ya existe en la Pokédex ')

        } else {
            res.status(401).send('Faltan datos')
        }

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = postPokemon;