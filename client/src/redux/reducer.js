import { GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME, GET_TYPES } from './actions'

export const initialState = {
    pokemon: [],
    allPokemons: [],
    allPokemonsCopy: [],
    types: []
};

const rootReducer = (state = initialState, actions) => {

    switch (actions.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: actions.payload,
                allPokemonsCopy: actions.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                pokemon: actions.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                allPokemons: actions.payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: actions.payload
            }
    default:
            return { ...state }
    }
}
export default rootReducer;