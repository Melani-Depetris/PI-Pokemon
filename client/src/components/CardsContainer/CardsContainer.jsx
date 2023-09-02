import Card from '../Card/Card'
import styles from './CardsContainer.module.css'

const CardsContainer = ({pokemons}) => {

  return (
    <div className={styles.cardContainer}>
      {
        pokemons.map(e => {
          return <Card
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.image}
            types={e.types}
          />
        })}
    </div>
  )
}

export default CardsContainer