import { Link } from "react-router-dom"
import styles from './MovieCard.module.css'

export const MovieCard = ({movie}) => {

    return(
        <div className={styles.cardContent}>
            <img className={styles.img} src={movie.imageUrl} width={'auto'} height={200}/>
            <h2 className={styles.names}>{movie.name}</h2>
            <h5 className={styles.names}>{movie.author.username}</h5>
            <Link to='/catalog' className={styles.detailsButton}>Details</Link>
        </div>
    )
}