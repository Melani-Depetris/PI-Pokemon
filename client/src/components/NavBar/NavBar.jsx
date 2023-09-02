import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>

      <Link to='/home'>
        <button>
          Home
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
        <button className={styles.buttonExit}>
          EXIT
        </button>
      </Link>
    </div>
  )
}

export default NavBar