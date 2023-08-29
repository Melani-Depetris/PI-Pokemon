const {Router} = require('express');
const typesRouter = Router();

const getTypes = require('../controllers/getTypes')

typesRouter.get('/', getTypes);    // ✓ Hace una peticion a la api de types, si no los tiene los guarda en la db y responde con los types que hay en la db, sino solo responde. 

module.exports = typesRouter;