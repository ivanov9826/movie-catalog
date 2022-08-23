import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../constants/baseUrl";
import styles from "./MovieDetails.module.css"

export const MovieDetails = () => {
    const [movie , setMovie ] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`${baseUrl}/movie/${id}`)
            .then(res => res.json())
            .then(res => setMovie(res))
    } , [id] );

    

    return (
        <div className={styles.cardContent}>
            <img src={movie.imageUrl} height="250" width="250"/>
            <h2 className={styles.name}>{movie.name}</h2>
            <h5 className={styles.name}>{movie.details}</h5>
            <div className={styles.buttons}>
                <button className={styles.button}>Delete</button>
                <button className={styles.button}>Edit</button>
            </div>
        </div>
    );
};