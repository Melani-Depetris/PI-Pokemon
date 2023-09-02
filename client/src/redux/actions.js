import axios from 'axios';
const URL = import.meta.env.VITE_REACT_APP_URL_BACKEND


export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
export const GET_BY_ID = 'GET_BY_ID';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_TYPES = 'GET_TYPES';

export const POST_POKEMON = 'POST_POKEMON';

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