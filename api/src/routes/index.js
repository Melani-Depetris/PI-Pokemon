const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonsRouter = require('./pokemonsRouter')
const typesRouter = require('./typesRouter')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonsRouter)

router.use('/types', typesRouter)


module.exports = router;
