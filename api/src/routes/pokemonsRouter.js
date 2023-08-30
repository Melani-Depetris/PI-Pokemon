const {Router} = require('express');
const pokemonsRouter = Router();

const getAllpokemons = require('../controllers/getAllpokemons')
const postPokemon = require('../controllers/postPokemon')

const getPokemonsById = require('../controllers/getPokemonsById')
const getPokemonsByName = require('../controllers/getPokemonsByName')


pokemonsRouter.get('/', getAllpokemons);            // ✓

pokemonsRouter.post('/', postPokemon);              // ✓

pokemonsRouter.get('/name', getPokemonsByName);     // ✓

pokemonsRouter.get('/:id', getPokemonsById);        // ✓ 


module.exports = pokemonsRouter;
