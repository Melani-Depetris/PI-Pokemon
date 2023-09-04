import Card from '../Card/Card'
import styles from './CardsContainer.module.css'
import { useState, useEffect } from 'react';

const CardsContainer = ({ pokemons }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {

      setIsLoading(false)
    }, 1000);

  }, []);

  return (
    <div className={styles.cardContainer}>
      {
        isLoading ? <div className={styles.loading} /> :
          (pokemons.map(e => {
            return <Card
              key={e.id}
              id={e.id}
              name={e.name}
              image={e.image}
              types={e.types}
            />
          }))
      }
    </div>
  )
}

export default CardsContainer