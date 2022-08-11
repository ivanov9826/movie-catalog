import { MovieCard } from "../MovieCard/MovieCard"
import styles from './Catalog.module.css'

export const Catalog = () => {
    return (
        <div>
            <h1>Catalog</h1>
            <div className={styles.cardWrapper}>
                {[1 , 2 , 3 , 4 ,5 , 6, 7 ,8 ,9 , 10 ].map(movie => <MovieCard />)}

            </div>
        </div>
    )
}