const {Router} = require('express');
const pokemonsRouter = Router();

const getAllpokemons = require('../handlers/getAllpokemons')
const postPokemon = require('../handlers/postPokemon')

const getPokemonsById = require('../handlers/getPokemonsById')
const getPokemonsByName = require('../handlers/getPokemonsByName')


pokemonsRouter.get('/', getAllpokemons);            // ✓

pokemonsRouter.post('/', postPokemon);              // ✓

pokemonsRouter.get('/name', getPokemonsByName);     // ✓

pokemonsRouter.get('/:id', getPokemonsById);        // ✓ 


module.exports = pokemonsRouter;
