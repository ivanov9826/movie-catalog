import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div>
                <Link to='/' className={styles.links}>Home</Link>
            </div>
            <div>
                <Link to='/catalog' className={styles.links}>Catalog</Link>
            </div>
            <div>
                <Link to='/login' className={styles.links}>Login</Link>
            </div>
            <div>
                <Link to='/register' className={styles.links}>Register</Link>
            </div>
            <div>
                <Link to='/logout' className={styles.links}>Logout</Link>
            </div>
        </div>
    );
};