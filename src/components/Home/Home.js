import styles from "./Home.module.css"

export const Home = () => {
    return (
        <div className={styles.background} style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/4840775.jpg")`
        }}>
        <h1 className={styles.homeHeader}>Movie Catalog</h1>
        </div>
    )
}