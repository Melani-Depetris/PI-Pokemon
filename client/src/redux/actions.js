import axios from 'axios';
const URL = import.meta.env.VITE_REACT_APP_URL_BACKEND


export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_TYPES = 'GET_TYPES';

export const POST_POKEMON = 'POST_POKEMON';

export const DELETE_POKEMON = 'DELETE_POKEMON';

export const PUT_POKEMON = 'PUT_POKEMON';

export const FILTER_TYPE = 'FILTER_TYPE';
export const FILTER_SOURCE = 'FILTER_SOURCE';
export const ORDER_ALF = 'ORDER_ALF';
export const ORDER_ATTACK = 'ORDER_ATTACK';


export const getAllPokemons = () => {
    return async (dispatch) => {

        try {
            const { data } = await axios(`${URL}pokemons`)
            return dispatch({
                type: GET_ALL_POKEMONS,
                payload: data,
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const getById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL}pokemons/${id}`)
            console.log(data);
            return dispatch({
                type: GET_BY_ID,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const getByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL}pokemons/name/?name=${name}`)
            console.log(data);
            return dispatch({
                type: GET_BY_NAME,
                payload: [data]
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${URL}types`)
            console.log(data);
            return dispatch({
                type: GET_TYPES,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const postPokemon = (pokemonData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL}pokemons`, pokemonData)
            console.log(data);
            alert('Captured Pokémon! 🥰')

            return dispatch({
                type: POST_POKEMON,
                payload: data
            })

        } catch (error) {
            console.log(error);
            window.alert(error.response.data)
        }
    }
}

export const deletePokmeon = (id) => {

    return async (dispatch) => {

        try {
            const { data } = await axios.delete(`${URL}pokemons/${id}`)

            return dispatch({
                type: DELETE_POKEMON,
                payload: data
            })
        } catch (error) {
            window.alert(error.response.data)
        }
    }
}

export const putPokemon = () => {

    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${URL}pokemons/`,)

            return dispatch({
                type: PUT_POKEMON,
                payload: data
            })

        } catch (error) {
            console.log(error.message);
        }
    }

}

export const filterType = (value) => {
    return {
        type: FILTER_TYPE,
        payload: value
    }
}

export const filterSource = (value) => {
    return {
        type: FILTER_SOURCE,
        payload: value
    }
}

export const orderAlf = (value) => {
    return {
        type: ORDER_ALF,
        payload: value
    }
}

export const orderAttack = (value) => {
    return {
        type: ORDER_ATTACK,
        payload: value
    }
}