import CardsContainer from "../../components/CardsContainer/CardsContainer";
const URL = import.meta.env.VITE_REACT_APP_URL_BACKEND

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Home.module.css'

import { useDispatch, useSelector } from 'react-redux'

import {getAllPokemons} from '../../redux/actions'

const POKEMONS_PER_PAGE = 12; // Cantidad de pokémones por página


const Home = () => {

    // const [pokemons, setPokemons] = useState([]);
    const pokemons = useSelector((state) => state.allPokemons) //Traigo de la store mi estado global

    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch() // Para poder hacer dispatch

    // El useEffect carga los pokémones desde la API tan pronto como el componente Home se monte.
    //Como el array de dependencias está vacío, este efecto solo se ejecutará una vez al montar el componente.
    useEffect(() => {

        dispatch(getAllPokemons())

        // const allPokemons = async () => {
        //     try {
        //         const response = (await axios.get(`${URL}pokemons`)).data;
        //         setPokemons(response);
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // };

        // allPokemons();
    }, [dispatch]);

    // Lógica para paginación
    const totalPages = Math.ceil(pokemons.length / POKEMONS_PER_PAGE); //Didido la cantidad de pokemons por la cantidad de pokemons por pagina y lo redondeo. Y me da la cantidad de paginas.
    const startIndex = (currentPage - 1) * POKEMONS_PER_PAGE; // currentPage es el numero de la pagina actual. 
    const visiblePokemons = pokemons.slice(startIndex, startIndex + POKEMONS_PER_PAGE); // Para obtener un subconjunto de elementos de un array. En este caso, estamos obteniendo los pokémones que serán visibles en la página actual de la paginación.

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.homeContainer}>
            <div className={styles.buttonsContainer}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button className={styles.buttonPage} key={index} onClick={() => goToPage(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
            <CardsContainer pokemons={visiblePokemons} />
        </div>
    );
}

export default Home;
