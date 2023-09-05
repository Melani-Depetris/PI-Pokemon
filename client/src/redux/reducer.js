import { GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME, GET_TYPES, FILTER_TYPE, FILTER_SOURCE } from './actions'

export const initialState = {
    pokemon: [],
    allPokemons: [],
    allPokemonsCopy: [],
    types: [],

    pokemonsFilterWithType: [],
    pokemonsFilterWithSource: []
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
        // case FILTER_TYPE:
        //     console.log(state.allPokemons);
        //     console.log(actions.payload);

        //     const pokemonsWithType = state.allPokemonsCopy.filter(pokemon =>
        //         pokemon.types.some(type => type.name === actions.payload)
        //     );
        //     return {
        //         ...state,
        //         allPokemons: pokemonsWithType,
        //         pokemonsFilterWithType: pokemonsWithType
        //     }
        // case FILTER_SOURCE:

        //     const pokemonsWithSourceType = state.pokemonsFilterWithType.filter(pokemon => pokemon.source === actions.payload)
        //     // const pokemonsWithSource = state.allPokemonsCopy.filter(pokemon => pokemon.source === actions.payload)

        //     return {
        //         ...state,
        //         // allPokemons: state.pokemonsFilterWithType.length ? pokemonsWithSourceType : pokemonsWithSource
        //         allPokemons: pokemonsWithSourceType
        //     };











        case FILTER_TYPE:

            let updatedStateWithType = { ...state }; // Copia el estado actual    

            if (state.pokemonsFilterWithSource.length) {

                const pokemonsWithTypeSource = state.pokemonsFilterWithSource.filter(pokemon => pokemon.type.name === actions.payload)

                updatedStateWithType.allPokemons = pokemonsWithTypeSource;
            } else {
                const pokemonsWithType = state.allPokemonsCopy.filter(pokemon => pokemon.types.some(type => type.name === actions.payload))

                updatedStateWithType.allPokemons = pokemonsWithType;
                updatedStateWithType.pokemonsFilterWithType = pokemonsWithType;
            }
            return updatedStateWithType;


            ///

        case FILTER_SOURCE:

            let updatedStateWithSource = { ...state }; // Copia el estado actual    

            if (state.pokemonsFilterWithType.length) {
                const pokemonsWithSourceType = state.pokemonsFilterWithType.filter(pokemon => pokemon.source === actions.payload)

                updatedStateWithSource.allPokemons = pokemonsWithSourceType;
            } else {
                const pokemonsWithSource = state.allPokemonsCopy.filter(pokemon => pokemon.source === actions.payload)

                updatedStateWithSource.allPokemons = pokemonsWithSource;
                updatedStateWithSource.pokemonsFilterWithSource = pokemonsWithSource;
            }
            return updatedStateWithSource;


        default:
            return { ...state }
    }
}
export default rootReducer;