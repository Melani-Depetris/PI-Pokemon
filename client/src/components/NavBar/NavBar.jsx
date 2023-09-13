import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch } from 'react-redux'
import { getAllPokemons } from '../../redux/actions'

import logo from '../../assets/logoPokemon.png'
import pokebola from '../../assets/pokebola.png'
import exit from '../../assets/exit.png'
import mujer from '../../assets/mujer.png'

const NavBar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleHome = () => {
    dispatch(getAllPokemons())
    navigate('/home')
  }

  return (
    <div className={styles.navBarContainer}>

      <button className={styles.navBarIconHome} onClick={handleHome} data-title="Home">
        <img src={logo} className={styles.navBarImagen} alt="Logo" />
      </button>

      <SearchBar />

      <Link to='/form'>
        <button className={styles.navBarIconForm} data-title="Form">
          <img src={pokebola} className={styles.navBarImagen} alt="Form" />
        </button>
      </Link>

      <Link to='/about'>
        <button className={styles.navBarIconAbout} data-title="About">
          <img src={mujer} className={styles.navBarImagen} alt="About" />
        </button>
      </Link>

      <Link to="/">
        <button className={styles.navBarIconExit} data-title="Exit">
          <img src={exit} className={styles.navBarImagen} alt="Exit" />
        </button>
      </Link>

    </div>
  )
}

export default NavBar