import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div>
                <Link to='/' >Home</Link>
            </div>
            <div>
                <Link to='/catalog' >Catalog</Link>
            </div>
            <div>
                <Link to='/login' >Login</Link>
            </div>
            <div>
                <Link to='/register' >Register</Link>
            </div>
            <div>
                <Link to='/logout' >Logout</Link>
            </div>
        </div>
    );
};