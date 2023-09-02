import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({ id, name, image, types }) => {
  return (
    <div >
      <Link to={`/detail/${id}`}>
        <div className={style.cardContainer}>
        <h2>#{id}</h2>
        <img src={image} alt="card" />
        <h2>{name}</h2>
        {types.map(e=> <h4>{e.name}</h4>)}
        </div>
      
      </Link>
    </div>

  )
}

export default Card