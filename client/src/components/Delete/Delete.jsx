import React from 'react'
import styles from '../Delete/Delete.module.css'
import { useDispatch } from 'react-redux'
import { deletePokmeon } from '../../redux/actions'

const Delete = ({ isOpen, onClose, id, }) => {

    const dispatch = useDispatch()

    const handleDelete = (event) => {
        dispatch(deletePokmeon(id))
    }

    return isOpen ? (
        <div className={styles.deleteContainer}>
            <div className={styles.delete}>
                <h3>Delete this Pokémon?</h3>
                <div className={styles.buttonsContainer}>
                    <button onClick={handleDelete} className={styles.buttons}>Yes</button>
                    <button onClick={onClose} className={styles.buttons}>No</button>
                </div>
            </div>
        </div>
    ) : null;
};

export default Delete;
