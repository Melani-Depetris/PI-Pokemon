const {Router} = require('express');
const pokemonRouter = Router();

const getAllpokemons = require('../controllers/getAllpokemons')
const postPokemon = require('../controllers/postPokemon')

const getPokemonsById = require('../controllers/getPokemonsById')
const getPokemonsByName = require('../controllers/getPokemonsByName')


pokemonRouter.get('/', getAllpokemons);            // paginado
pokemonRouter.post('/', postPokemon)             

pokemonRouter.get('/name', getPokemonsByName);     // ✓

pokemonRouter.get('/:id', getPokemonsById);        // ✓ buscar por id enviado por params en la API 
pokemonRouter.get('/:uuid', getPokemonsById);      // ✓ buscar por uuid enviado por params en la DB 


module.exports = pokemonRouter;