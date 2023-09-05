import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, filterType, filterSource} from '../../redux/actions'
import styles from './Filters.module.css'

const Filters = () => {

    const typesBD = useSelector((state) => state.types)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypes())
    }, [])

    const handleFilterType = (event) => {
        dispatch(filterType(event.target.value))
    }


    // const pokemonsSource = useSelector((state) => state.allPokemons)

    const handleFilterSource = (event) => {
        dispatch(filterSource(event.target.value))
    }

    return (
        <div>Filters
            <div className={styles.buttonsFilter}>

                <select name="selectType" onChange={handleFilterType}>

                    <option>Select Type</option>
                    {typesBD.map((type, index) => (
                        <option key={index} value={type.name} >
                            {type.name}
                        </option>
                    ))}

                </select>

                <select name="selectSource" onChange={handleFilterSource}>
                   
                   <option>Select Source</option>

                   <option value="API">API</option>
                   <option value="DB">DB</option>
                   
                   {/* {pokemonsSource.map((source, index) => (
                    <option key={index} value={source}>
                        {source}
                    </option>

                   ))} */}

                </select>

            </div>
        </div>
    )
}

export default Filters;
