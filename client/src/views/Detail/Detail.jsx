const URL = import.meta.env.VITE_REACT_APP_URL_BACKEND
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams, Link } from "react-router-dom";

import styles from './Detail.module.css'
import flecha from '../../assets/flecha-circulo-izquierda.png'
import house from '../../assets/housePokemonDetail.png'
import pokebola from '../../assets/pokebola-delete.png'

import Delete from '../../components/Delete/Delete'
import Update from '../../components/Update/Update'

import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../redux/actions'


const Detail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.pokemon)
    const [isLoading, setIsLoading] = useState(true);

    console.log(detail);

    useEffect(() => {

        dispatch(getById(id))
        setTimeout(() => {

            setIsLoading(false)
        }, 1000);

    }, [dispatch]);

    // console.log(detail);

    //Estado local que uso para abrir y cerrar el componente delete
    const [deleteIsOpen, setDeleteIsOpen] = useState(false)
    const openDelete = () => {
        setDeleteIsOpen(true)
    }
    const closeDelete = () => {
        setDeleteIsOpen(false)
    }
    console.log(deleteIsOpen);

    const [updateIsOpen, setUpdateIsOpen] = useState(false)
    const openUpdate = () => {
        setUpdateIsOpen(true)
    }
    const closeUpdate = () => {
        setUpdateIsOpen(false)
    }
    console.log(updateIsOpen);

    return (
        <div className={styles.DetailContainer}>
            <img src={house} className={styles.DetailContainerHouse} />

            {
                isLoading ? <div className={styles.loading} /> :


                    <div>
                        {/* <Link to='/home'>
                            <img src={flecha} width='40px' />
                        </Link> */}



                        <img src={detail.image} alt={detail.name} className={styles.pokemonImg} />

                        <div className={styles.DetailPokemon}>
                            {
                                detail.source === 'DB'
                                    ?

                                    <div>
                                        <div className={styles.delete} >
                                            <button onClick={openDelete} className={styles.buttonDelete}>
                                                <img src={pokebola} className={styles.imageDelete} />
                                            </button>
                                            <Delete isOpen={deleteIsOpen} onClose={closeDelete} id={id} />
                                        </div>

                                        <div>
                                            <button onClick={openUpdate} className={styles.buttonUpdate}>
                                                Edit
                                            </button>
                                            <Update isOpen={updateIsOpen} onClose={closeUpdate} pokemon={detail} />
                                        </div>

                                    </div>

                                    : null
                            }

                            <div className={styles.containerh3}>
                                <h3>Id: <span>{detail.id}</span> </h3>
                                <h3>Name: <span>{detail.name}</span> </h3>
                                <h3>Life: <span>{detail.life}</span> </h3>
                                <h3>Attack: <span>{detail.attack}</span> </h3>
                                <h3>Defense: <span>{detail.defense}</span> </h3>
                                <h3>Speed: <span>{detail.speed}</span> </h3>
                                <h3>Height: <span>{detail.height}</span> </h3>
                                <h3>Weight: <span>{detail.weight}</span> </h3>
                                <h3>Types: <span>{detail.types?.map(e => <p>{e.name}</p>)}</span> </h3>
                            </div>

                        </div>

                    </div>
            }
        </div>
    )
}

export default Detail;