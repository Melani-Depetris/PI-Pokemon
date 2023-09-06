import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, filterType, filterSource, orderAlf, orderAttack } from '../../redux/actions'
import styles from './Filters.module.css'

const Filters = () => {

    const typesBD = useSelector((state) => state.types)
    console.log(typesBD);
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

    const handlerOrderAlf = (event) => {
        dispatch(orderAlf(event.target.value))
    }

    const handlerOrderAttack = (event) => {
        dispatch(orderAttack(event.target.value))
    }

    return (
        <div className={styles.filtersConteiner}>

            <div className={styles.buttonsFilter}>

                <label >Filter by Type</label>
                <select name="selectType" onChange={handleFilterType}>

                    <option> - </option>
                    {typesBD.map((type, index) => (
                        <option key={index} value={type.name} >
                            {type.name}
                        </option>
                    ))}
                </select>
            </div>


            <div className={styles.buttonsFilter}>

                <label >Filter by source</label>
                <select name="selectSource" onChange={handleFilterSource}>

                    <option> - </option>

                    <option value="API">API</option>
                    <option value="DB">DB</option>

                </select>

            </div>

            <div className={styles.buttonsFilter}>

                <label >Order by name</label>
                <select name="selectOrderAlf" onChange={handlerOrderAlf}>

                    <option> - </option>
                    <option value='A-Z'> A-Z</option>
                    <option value='Z-A'> Z-A</option>

                </select>
            </div>


            <div className={styles.buttonsFilter}>

                <label >Order by attack</label>
                <select name="selectOrderAttack" onChange={handlerOrderAttack}>

                    <option> - </option>
                    <option value='1'>Strong</option>
                    <option value='100'>Weak</option>

                </select>

            </div>

        </div>
    )
}

export default Filters;
