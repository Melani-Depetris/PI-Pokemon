const {Router} = require('express');
const pokemonsRouter = Router();

const getAllpokemons = require('../handlers/getAllpokemons')
const postPokemon = require('../handlers/postPokemon')

const getPokemonsById = require('../handlers/getPokemonsById')
const getPokemonsByName = require('../handlers/getPokemonsByName')

const deletePokemonsById = require('../handlers/deletePokemonsById');
const putPokemonsById = require('../handlers/putPokemonsById');

pokemonsRouter.get('/', getAllpokemons);            // ✓

pokemonsRouter.post('/', postPokemon);              // ✓

pokemonsRouter.put('/', putPokemonsById)            // 

pokemonsRouter.get('/name', getPokemonsByName);     // ✓

pokemonsRouter.get('/:id', getPokemonsById);        // ✓

pokemonsRouter.delete('/:id', deletePokemonsById)   // ✓


module.exports = pokemonsRouter;
