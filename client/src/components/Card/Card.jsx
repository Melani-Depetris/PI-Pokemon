import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({ key, id, name, image, types }) => {
  return (
    <div className={style.cardContainerAnimation}>


      <Link to={`/detail/${id}`} className={style.card2} >
        <div className={style.card}>
          <div className={style.cardContainer}>

            {/* <h2>#{id}</h2> */}
            <img src={image} alt="card" height='120px' width='120px' className={style.imagenPokemon} />

            <h2>{name}</h2>

            <div className={style.types}>
              {types.map(e => <h4>{e.name}</h4>)}
            </div>

          </div>

        </div>
      </Link>
    </div>

  )
}

export default Card