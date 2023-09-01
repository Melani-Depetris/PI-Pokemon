import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <Link to="/">
        <button  className={styles.buttonExit}>
          EXIT
        </button>
      </Link>
      <Link to='/home'>
        <button>
          Home
        </button>
      </Link>
      <Link to='/form'>
        <button>
          +Pokemons
        </button>
      </Link>
    </div>
  )
}

export default NavBar