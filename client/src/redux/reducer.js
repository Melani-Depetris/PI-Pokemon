import { GET_ALL_POKEMONS, GET_BY_ID, GET_BY_NAME, GET_TYPES, FILTER_TYPE, FILTER_SOURCE, ORDER_ALF, ORDER_ATTACK, DELETE_POKEMON, PUT_POKEMON } from './actions'

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
        case DELETE_POKEMON:
            return {
                ...state,
                allPokemons: actions.payload
            }
        case PUT_POKEMON:
            return {
                ...state,
                pokemon: actions.payload
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

        case ORDER_ALF:
            // let orderAlf = [...state.allPokemons];

            // return {
            //     ...state,
            //     allPokemons: (actions.payload === 'A-Z') ? orderAlf.sort((a, b) => a.name - b.name) : (actions.payload === 'Z-A') && orderAlf.sort((a, b) => b.name - a.name)
            // }

            let orderAlf = [...state.allPokemons];

            if (actions.payload === 'A-Z') {
                //    return orderAlf.sort((a,b) => a.name.localeCompare(b.name) )
                orderAlf.sort((a, b) => {
                    const nameA = a.name.toLowerCase(); // Convertir a minúsculas 
                    const nameB = b.name.toLowerCase();
                    return nameA.localeCompare(nameB); // Comparar cadenas de texto 
                });
            }

            if (actions.payload === 'Z-A') {
                orderAlf.sort((a, b) => {
                    const nameA = a.name.toLowerCase(); // Convertir a minúsculas 
                    const nameB = b.name.toLowerCase();
                    return nameB.localeCompare(nameA); // Comparar cadenas de texto 
                });
            }
            return {
                ...state,
                allPokemons: orderAlf,
            };

        case ORDER_ATTACK:

            let orderAtt = [...state.allPokemons];

            if (actions.payload === '1') {
                orderAtt.sort((a, b) => { return b.attack - a.attack })
            }
            if (actions.payload === '100') {
                orderAtt.sort((a, b) => { return a.attack - b.attack })
            }

            return {
                ...state,
                allPokemons: orderAtt
            }


        default:
            return { ...state }
    }
}
export default rootReducer;