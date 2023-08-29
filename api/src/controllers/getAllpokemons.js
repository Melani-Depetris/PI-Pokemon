const axios = require('axios');
const {Pokemon} = require('../db')


const getAllpokemons = async (req, res) => {


    try {
        //API pokemon
        let URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';
        let { limit } = req.query
        
        //Va a entrar al while con la URL_BASE que es el entrypoint de la api. Dentro del while voy a guardar en una constante la peticion de tipo GET a la api, que me devuelve 20 pokemons. Voy a destructurar results y next de la la peticion en el punto data. Fuera del while creo un array para ir pusheando results de cada iteración. Mientras exista el next va a seguir iterando.
        
        // while (URL_BASE) {
            let urlAll = [];
            const { next, results } = (await axios.get(URL_BASE)).data


            for (const objeto of results) {
                urlAll.push(objeto);
            }

            const arrayProm = await axios.all(urlAll)
            let URL_LIMIT =  'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'

            if(arrayProm ){
                const { next, results } = (await axios.get(URL_LIMIT)).data
                for (const objeto of results) {
                    urlAll.push(objeto);
                }
            }


        //     URL_BASE = next
        // }



        // while (URL_BASE) {
        //     const { next, results } = (await axios.get(URL_BASE)).data


        //     for (let i = 0; i < results.length; i++) {
        //         const { id, name, sprites, stats, height, weight, types } = (await axios.get(urlAll)).data.results
        //         const pokemon = {
        //             id: id,
        //             name: name,
        //             //image: sprites.other.home.front_shiny,
        //             image: sprites.front_shiny,
        //             life: stats[0].base_stat,
        //             attack: stats[1].base_stat,
        //             defense: stats[2].base_stat,
        //             speed: stats[5].base_stat,
        //             height: height,
        //             weight: weight,
        //             types: types.map(e => e.type.name)
        //         }
        //         urlAll.push(pokemon)
        //     }

        //     URL_BASE = next
        // }




        // let allPokemons = [];

        // for (let i = 0; i < urlAll.length; i++) {
        //     const { id, name, sprites, stats, height, weight, types } = (await axios.get(urlAll[i].url)).data
        //     const pokemon = {
        //         id: id,
        //         name: name,
        //         //image: sprites.other.home.front_shiny,
        //         image: sprites.front_shiny,
        //         life: stats[0].base_stat,
        //         attack: stats[1].base_stat,
        //         defense: stats[2].base_stat,
        //         speed: stats[5].base_stat,
        //         height: height,
        //         weight: weight,
        //         types: types.map(e => e.type.name)
        //     }
        //     allPokemons.push(pokemon)
        // }


        //Si exististe el array responda con el mismo, sino respondo con 'Not fount'
        return urlAll ?
            res.status(200).json(urlAll) :
            res.status(404).send('Not found')

    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = getAllpokemons;
