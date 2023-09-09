// const URL = import.meta.env.VITE_REACT_APP_URL_BACKEND
// import axios from 'axios'

import React from 'react'
import styles from './SearchBar.module.css'
import lupa from '../../assets/lupa.png'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getByName } from '../../redux/actions'


const SearchBar = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        setName(event.target.value)
        // let inputValue = event.target.value
        // setName(inputValue)
    }
    
    console.log(name);

    const onSearch = async (name) => {

        dispatch(getByName(name))
        
        navigate('/home')

        // try {
        //     const response = (await axios(`${URL}pokemons/name/?name=${name}`)).data

        //     console.log(response);
        // } catch (error) {
        //     window.alert('¡Ese Pokemon no existe en la Pókedex!');

        // }
    }
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') { // Realizar la búsqueda cuando se presiona Enter
            onSearch(name);
            setName('')
        }
    };

    return (
        <div >
            <div className={styles.searchContainer}>
                
                <input className={styles.searchInput} name="myInput" type='search' value={name} onChange={handleChange} placeholder='Search a pokemon' onKeyPress={handleKeyPress} />

                <button onClick={() => { onSearch(name); setName('') }} className={styles.searchButton}>
                    <img src={lupa} width='20px' height='20px' className={styles.searchIcon} />
                </button>

            </div>
        </div>
    )
}

export default SearchBar;