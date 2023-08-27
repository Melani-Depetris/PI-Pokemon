const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('../controllers/pokemons')
const getPokemonsById = require('../controllers/getPokemonsById')
const getPokemonsByName = require('../controllers/getPokemonsByName')
const postPokemon = require('../controllers/postPokemon')
const types = require('../controllers/types')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/types', types);                       // ✓ falta agregarlos a la DB
 
router.get('/pokemon', pokemons);                  // paginado

router.get('/pokemon/name', getPokemonsByName);    // ✓

router.get('/pokemon/:id', getPokemonsById);       // buscar por id enviado por params en la API ✓
router.get('/pokemon/:uuid', getPokemonsById);     // buscar por uuid enviado por params en la DB ✓

// router.post('/pokemon', postPokemon)


module.exports = router;
