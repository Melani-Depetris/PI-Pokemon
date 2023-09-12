import styles from './Update.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { putPokemon } from '../../redux/actions'
import validation from '../validation'


const Update = ({ isOpen, onClose, pokemon }) => {

    // const pokemon = useSelector((state) => state.pokemon)
    const typesBD = useSelector((state) => state.types)

    console.log(pokemon);

    const [pokemonData, setPokemonData] = useState(pokemon
        // {
        //     name: '',
        //     image: '',
        //     life: '',
        //     attack: '',
        //     defense: '',
        //     speed: '',
        //     height: '',
        //     weight: '',
        //     types: []
        // }
    );

    console.log(pokemonData);
    useEffect(() => {
        setPokemonData(pokemon)
    }, [])

    const dispatch = useDispatch();

    const [errors, setErrors] = useState({})
    const handleChange = (event) => {

        setPokemonData({ ...pokemonData, [event.target.name]: event.target.value });

        setErrors(validation({ ...pokemonData, [event.target.name]: event.target.value }))
    };


    const handleChangeSelect = (event) => {

        if (event.target.value !== 'Select Type' && !pokemonData.types.includes(event.target.value) && pokemonData.types.length < 2) {
            setPokemonData({
                ...pokemonData,
                types: [...pokemonData.types, {name: event.target.value}]
            })
        } else {
            pokemonData.types.includes(event.target.value) ? alert('Has already been selected') :
                alert('Can belong to 2 types of Pokemon')
        }

        setErrors(validation({
            ...pokemonData,
            types: [...pokemonData.types, event.target.value]
        }))
        // setTypesSelect({ ...typesSelect, [event.target.name]: event.target.value})
    }

    console.log(pokemonData.types)


    const handleCancel = (event) => {
        event.preventDefault()

        setPokemonData({
            ...pokemonData,
            types: pokemonData.types.filter(e => e.name !== event.target.value)
        })
    }


    const handleUpdate = () => {
        dispatch(putPokemon(pokemonData))
        if(pokemon.name !== pokemonData.name || pokemon.image !== pokemonData.image || pokemon.life !== pokemonData.life || pokemon.attack !== pokemonData.attack || pokemon.defense !== pokemonData.defense || pokemon.speed !== pokemonData.speed || pokemon.height !== pokemonData.height || pokemon.weight !== pokemonData.weight || pokemon.types.name !== pokemonData.types.name){alert('Updated Pokémon! 👍🏼')}
        setTimeout(
            onClose(), 1000
        )
    }

    return isOpen ? (
        <div className={styles.updateContainer}>

            <label className={styles.label}>Name </label>
            <input className={styles.input} onChange={handleChange} value={pokemonData.name} name='name' placeholder='Name' />

            {errors.e1 ? <p className={styles.errors} >{errors.e1}</p> : <></>}


            <label className={styles.label}>Image: </label>
            <input className={styles.input} onChange={handleChange} value={pokemonData.image} name='image' placeholder='Paste the image url' />

            {errors.e2 ? <p className={styles.errors} >{errors.e2}</p> : <></>}

            <label className={styles.label}>Life: </label>
            <input className={styles.input} onChange={handleChange} value={pokemonData.life} name='life' placeholder='Life' />

            {errors.e3 ? <p className={styles.errors} >{errors.e3}</p> : <></>}

            <label className={styles.label}>Attack: </label>
            <input className={styles.input} onChange={handleChange} value={pokemonData.attack} name='attack' placeholder='Attack' />

            {errors.e4 ? <p className={styles.errors} >{errors.e4}</p> : <></>}


            <label className={styles.label}>Defense: </label>
            <input className={styles.input} onChange={handleChange} value={pokemonData.defense} name='defense' placeholder='Defense' />

            {errors.e5 ? <p className={styles.errors} >{errors.e5}</p> : <></>}

            <label className={styles.label}>Speed: </label>
            <input className={styles.input} onChange={handleChange} value={pokemonData.speed} name='speed' placeholder='Speed' />

            {errors.e6 ? <p className={styles.errors} >{errors.e6}</p> : <></>}

            <label className={styles.label}>Height: </label>
            <input className={styles.input} onChange={handleChange} value={pokemonData.height} name='height' placeholder='Height' />

            {errors.e7 ? <p className={styles.errors} >{errors.e7}</p> : <></>}

            <label className={styles.label}>Weight: </label>
            <input className={styles.input} onChange={handleChange} value={pokemonData.weight} name='weight' placeholder='Weight' />

            {errors.e8 ? <p className={styles.errors} >{errors.e8}</p> : <></>}

            <label htmlFor="types" >Selecciona que tipo de pokemon es:</label>
            <select className={styles.selectTypes} onChange={handleChangeSelect} name='types'>

                <option>Select Type</option>
                {
                    typesBD.map((type, index) => (
                        <option key={index} value={type.name} >
                            {type.name}
                        </option>
                    ))
                }

            </select>


            {
                pokemonData.types.map(e =>
                (
                    <div key={e.name}>
                        <p>{e.name}</p>
                        <button value={e.name} onClick={handleCancel}> x </button>
                    </div>
                ))
            }

            {errors.e9 ? <p className={styles.errors} >{errors.e9}</p> : <></>}


            <button onClick={handleUpdate} type='submit'>
                Update
            </button>

            <button onClick={onClose} className={styles.buttons}>
                Exit
            </button>


        </div>
    ) : null
};

export default Update;
