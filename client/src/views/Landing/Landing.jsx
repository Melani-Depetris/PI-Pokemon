import { Link } from 'react-router-dom'
import styles from './Landing.module.css'
import { useState, useRef } from 'react'

import videoLanding from '../../assets/landing.mp4'
import botonPlay from '../../assets/play.png'
import botonPause from '../../assets/pause.png'


const Landing = () => {
    // const [isPlaying, setIsPlaying] = useState(false);
    // const videoRef = useRef(null);

    // const playAndStop = () => {
    //     if (videoRef.current) {
    //         if (isPlaying) {
    //             videoRef.current.pause();
    //         } else {
    //             videoRef.current.play();
    //         }
    //         setIsPlaying(!isPlaying);
    //     }
    // };

    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className={styles.landingContainer}>
            <Link to='/home'>
                <button className={styles.button}>💮START</button>
            </Link>

            <video ref={videoRef} loop autoPlay muted width="400" height="300" className={styles.videoLanding}>
                <source src={videoLanding} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
            </video>
            <button onClick={togglePlayPause} className={styles.botonPlayPause}>
                {isPlaying ? <img src={botonPause} className={styles.botonPlayPause}/> : <img src={botonPlay} className={styles.botonPlayPause}/>}
            </button>

        </div>
    )
}

export default Landing;