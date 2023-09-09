const getTypesController = require('../controllers/getTypesController')

const getTypes = async (req, res) => {

    try {

        let types = await getTypesController()
        res.status(200).json(types)

    } catch (error) {

        res.status(500).send(error.message)

    }
};
module.exports = getTypes;