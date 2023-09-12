import React from 'react'
import styles from '../Delete/Delete.module.css'
import { useDispatch } from 'react-redux'
import { deletePokmeon, getAllPokemons } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'


const Delete = ({ isOpen, onClose, id }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = () => {
        dispatch(deletePokmeon(id))
        dispatch(getAllPokemons())
        setTimeout(()=> navigate('/home'), '1000'
        )
    }

    return isOpen ? (
        <div className={styles.deleteContainer}>
            <div className={styles.delete}>
                <h3>Release this pokemon?</h3>
                <div className={styles.buttonsContainer}>
                    <button onClick={handleDelete} className={styles.buttons}>Yes</button>
                    <button onClick={onClose} className={styles.buttons}>No</button>
                </div>
            </div>
        </div>
    ) : null;
};

export default Delete;
