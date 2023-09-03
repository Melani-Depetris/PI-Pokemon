import { useState, useEffect } from 'react'
import validation from '../../components/validation'
import { useDispatch, useSelector } from 'react-redux'

import { getTypes, postPokemon} from '../../redux/actions'

import styles from './Form.module.css'
import iconMas from '../../assets/mas.png'


const Form = () => {

    const types = useSelector((state) => state.types)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])


    const [pokemonData, setPokemonData] = useState({
        name: '',
        image: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    });

    const [errors, setErrors] = useState({})

    //Esta función se ejecuta cuando el input escucha un cambio, esta función trabaja con el evento que desato el cambio seteando el estado local copiando lo que ya tiene y agregando el valor que le llega por event.target.value (a ese value lo saca del nuevo estado de cada input) en event.target.name. (Ese name es el name de cada input)

    //Esta función tambien seteara al estado local errors con una validación para los eventos que se producen en el estado local pokemonData

    const handleChange = (event) => {

        setPokemonData({ ...pokemonData, [event.target.name]: event.target.value });

        setErrors(validation({ ...pokemonData, [event.target.name]: event.target.value }))
    };

    //Esta función se ejecuta cuando en el botón submit del formulario se produce un onClick

    const handleSubmit = (event) => {

        event.preventDefault(); //le quita el evento de refresh

        dispatch(postPokemon(pokemonData))// Acá hago el dispatch de la funcion que hace el post en la db 
    };

   
    const [typesSelect, setTypesSelect] = useState([])

    const handleChangeSelect = (event) => {
        if (event.target.value !== 'Select Type' && !pokemonData.types.includes(event.target.value)) {
            setPokemonData({
                ...pokemonData,
                types: [...pokemonData.types, event.target.value]
            })
        }
        // setTypesSelect({ ...typesSelect, [event.target.name]: event.target.value})
    }
    console.log(pokemonData.types);

    const handleCancel = (event) => {

        
        setPokemonData({
            ...pokemonData,
            types: pokemonData.types.filter(e => e !== event.target.value)
        })
    }

    return (
        <div className={styles.form}>
            <form className={styles.formContainer}>

                <h1>New Pokemón!!</h1>
                <h3>¿Estás a punto de capturar un nuevo Pokémon?</h3>
                <p>Te pediré algunos datos para poder agregarlo a tu Pokédex.</p>

                <label className={styles.label}>Name </label>
                <input className={styles.input} onChange={handleChange} value={pokemonData.name} name='name' placeholder='Name' />

                {errors.e1 ? <p>{errors.e1}</p> : <></>}


                <label className={styles.label}>Image: </label>
                <input className={styles.input} onChange={handleChange} value={pokemonData.image} name='image' placeholder='Image' />

                {errors.e2 ? <p>{errors.e2}</p> : <></>}

                <label className={styles.label}>Life: </label>
                <input className={styles.input} onChange={handleChange} value={pokemonData.life} name='life' placeholder='Life' />

                {errors.e3 ? <p>{errors.e3}</p> : <></>}

                <label className={styles.label}>Attack: </label>
                <input className={styles.input} onChange={handleChange} value={pokemonData.attack} name='attack' placeholder='Attack' />

                {errors.e4 ? <p>{errors.e4}</p> : <></>}


                <label className={styles.label}>Defense: </label>
                <input className={styles.input} onChange={handleChange} value={pokemonData.defense} name='defense' placeholder='Defense' />

                {errors.e5 ? <p>{errors.e5}</p> : <></>}

                <label className={styles.label}>Speed: </label>
                <input className={styles.input} onChange={handleChange} value={pokemonData.speed} name='speed' placeholder='Speed' />

                {errors.e6 ? <p>{errors.e6}</p> : <></>}

                <label className={styles.label}>Height: </label>
                <input className={styles.input} onChange={handleChange} value={pokemonData.height} name='height' placeholder='Height' />

                {errors.e7 ? <p>{errors.e7}</p> : <></>}

                <label className={styles.label}>Weight: </label>
                <input className={styles.input} onChange={handleChange} value={pokemonData.weight} name='weight' placeholder='Weight' />

                {errors.e8 ? <p>{errors.e8}</p> : <></>}

                <label for="types">Selecciona que tipo de pokemon es:</label>

                <select className={styles.selectTypes} onChange={(event) => [handleChangeSelect(event), setTypesSelect(event)]} value={typesSelect}>
                    <option>Select Type</option>
                    {types.map((type, index) => (
                        <option key={index} >
                            {type.name}
                        </option>
                    ))}
                </select>

                {pokemonData.types.map(e =>
                (<div>
                    <p>{e}</p>
                    <button value={e} onClick={handleCancel}> x </button>
                </div>)
                )}

                <button type='submit' className={styles.buttonSubmit} onClick={handleSubmit}>
                    <img src={iconMas} className={styles.buttonSubmitIcon} />
                </button>
                {/* {errors.e10 ? <p>{errors.e10}</p> : <p>Perfecto</p>} */}
            </form>
        </div>
    )
}

export default Form;