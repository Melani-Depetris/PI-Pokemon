const URL_BASE_TYPES = 'https://pokeapi.co/api/v2/type';
const axios = require('axios') // permite hacer solicitudes o peticiones que cumplen con el protocolo http, y devuelven una promesa.
const { Type } = require('../db')

const getTypes = async (req, res) => {
    try {

        const { results } = (await axios.get(URL_BASE_TYPES)).data // Destructuro results de la peticion a la API

        const typesPokemon = results.map(e => { return { name: e.name } }) //Mapeo los elementos que hay dentro del array 'results' y por cada uno retorno un objeto con la key 'name' y el valor del objeto en el .name

        let allTypes = await Type.findAll() // Guardo en una constante la petición que trae todo lo que encuentra en el modelo 'Type'. allTypes es un array.

        // findAll --> Devuelve una promesa que se resuelve en un array de objetos, donde cada objeto representa un registro de la base de datos 

        console.log(allTypes);

        // Valido si no hay nada en el modelo 'Type'. Si es true, hago una peticion al modelo 'Type' con el metodo bulkCreate. Para agregar el array typesPokemon.
        if (!allTypes.length) {
            await Type.bulkCreate(typesPokemon)
            allTypes = await Type.findAll()
        }

        //  Si allTypes contiene algo responde con el mismo array

        res.status(200).json(allTypes)

    } catch (error) {
        res.status(500).send(error.message)
    }
};
module.exports = getTypes;