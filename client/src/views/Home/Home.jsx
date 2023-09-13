import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filters from "../../components/Filters/Filters";

const URL = import.meta.env.VITE_REACT_APP_URL_BACKEND
import axios from 'axios';

import { useEffect, useState } from 'react';
import styles from './Home.module.css'

import { useDispatch, useSelector } from 'react-redux'

import { getAllPokemons } from '../../redux/actions'



const Home = () => {

    // const [pokemons, setPokemons] = useState([]);
    const pokemons = useSelector((state) => state.allPokemons) //Traigo de la store mi estado global

    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch() // Para poder hacer dispatch

    // Cargo los pokémones.
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

    const POKEMONS_PER_PAGE = 12; // Cantidad de pokémones por página

    const totalPages = Math.ceil(pokemons.length / POKEMONS_PER_PAGE); //Divido la cantidad de pokemons por la cantidad de pokemons por pagina y lo redondeo. Y me da la cantidad de paginas.

    const startIndex = (currentPage - 1) * POKEMONS_PER_PAGE; // currentPage es el numero de la pagina actual. 

    const visiblePokemons = pokemons.slice(startIndex, startIndex + POKEMONS_PER_PAGE); // Para obtener un subconjunto de elementos de un array. En este caso, obtengo los pokémones que serán visibles en la página actual de la paginación.

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.homeContainer}>

            <div className={styles.buttonsContainer}>

                {
                    Array.from({ length: totalPages }, (_, index) => (

                        <button className={styles.buttonPage} key={index} onClick={() => goToPage(index + 1)}>
                            {index + 1}
                        </button>

                    ))
                }

            </div>

            <div className={styles.containerFiltersCards}>
                <div className={styles.containerFilters}>
                    <Filters />
                </div>
                <div className={styles.containerCards}>
                    <CardsContainer pokemons={visiblePokemons} />
                </div>
            </div>

        </div>
    );
}

export default Home;
