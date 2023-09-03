import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'

import pokebola from '../../assets/pokebola.png'
import exit from '../../assets/exit.png'

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>

      <Link to='/home'>
        <button className={styles.navBarIconHome}>
          <img src={pokebola} className={styles.navBarImagen}/>
        </button>
      </Link>

      <SearchBar />

      <Link to='/form'>
        <button>
          +Pokemons
        </button>
      </Link>
      <Link to='/about'>
        <button>
          About
        </button>
      </Link>

      <Link to="/">
        <button className={styles.navBarIconExit}>
        <img src={exit} className={styles.navBarImagen}/>
        </button>
      </Link>
    </div>
  )
}

export default NavBar