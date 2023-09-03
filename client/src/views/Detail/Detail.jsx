const URL = import.meta.env.VITE_REACT_APP_URL_BACKEND
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, Link } from "react-router-dom";
import styles from './Detail.module.css'
import flecha from '../../assets/flecha-circulo-izquierda.png'

import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../redux/actions'


const Detail = () => {
    
    const { id } = useParams()
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.pokemon)
    // const [isLoading, setIsLoading] = useState(true);

    console.log(detail);

    useEffect(() => {

        dispatch(getById(id))
        // setTimeout(() => {

        //     setIsLoading(false)
        // }, 1000);

    }, [dispatch, id]);

    // console.log(detail);

    return (
        <div className={styles.DetailContainer}>
            {/* <h1>Detail</h1> */}

            {/* {
                isLoading ? <div className={styles.loading} /> : }*/}

                    <div>
                        <Link to='/home'>
                            <img src={flecha} width='40px' />
                        </Link>
                        <div className={styles.DetailPokemon}>
                            <h3>Id: {detail.id}</h3>
                            <h3>Name: {detail.name}</h3>
                            <img src={detail.image} alt={detail.name} />
                            <h3>Life: {detail.life}</h3>
                            <h3>Attack: {detail.attack}</h3>
                            <h3>Defense: {detail.defense}</h3>
                            <h3>Speed: {detail.speed}</h3>
                            <h3>Height: {detail.height}</h3>
                            <h3>Weight: {detail.weight}</h3>
                            <h3>Types: {detail.types?.map(e => e.name)} </h3>
                        </div>
                    </div>
            
        </div>
    )
}

export default Detail;