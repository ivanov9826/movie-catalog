import { Link } from "react-router-dom"
import styles from './MovieCard.module.css'

export const MovieCard = () => {
    return(
        <div className={styles.cardContent}>
            <img className={styles.img} src="https://cdn.thisiswhyimbroke.com/buying-guides/199/lord-of-the-rings-gifts.jpg" width={'auto'} height={200}/>
            <h2>Lord of the rings</h2>
            <h6>Action-Fantasy</h6>
            <Link to='/catalog' >Details</Link>
        </div>
    )
}