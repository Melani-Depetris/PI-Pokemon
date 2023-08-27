const axios = require('axios');
const Pokemon = require('../models/Pokemon')


const getPokemonsById = async (req, res) => {

    
    try {
        //API pokemon
        let URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

        let urlAll = [];

        //Va a entrar al while con la URL_BASE que es el entrypoint de la api. Dentro del while voy a guardar en una constante la peticion de tipo GET a la api, que me devuelve 20 pokemons. Voy a destructurar results y next de la la peticion en el punto data. Fuera del while creo un array para ir pusheando results de cada iteración. Mientras exista el next va a seguir iterando.
        while (URL_BASE) {
            const pagina = await axios.get(URL_BASE)
            const { results, next } = pagina.data

            for (const objeto of results) {
                urlAll.push(objeto);
              }
        
            URL_BASE = next
        }


        //Si exististe el array responda con el mismo, respondo con 'Not fount'
        return urlAll ?
            res.status(200).json(urlAll) :
            res.status(404).send('Not found')

    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = getPokemonsById;
