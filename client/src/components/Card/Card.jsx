import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({ id, name, image }) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className={style.cardContainer}>
        <h2>#{id}</h2>
        <img src={image} alt="card" />
        <h2>{name}</h2>

      </div>
    </Link>

  )
}

export default Card