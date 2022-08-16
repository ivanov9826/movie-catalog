import { Link } from "react-router-dom"
import styles from './MovieCard.module.css'

export const MovieCard = ({movie}) => {

    return(
        <div className={styles.cardContent}>
            <img className={styles.img} src={movie.imageUrl} width={'auto'} height={200}/>
            <h2>{movie.name}</h2>
            <h6>{movie.author.username}</h6>
            <Link to='/catalog' >{movie.details}</Link>
        </div>
    )
}