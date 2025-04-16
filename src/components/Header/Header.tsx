import styles from './Header.module.css';

const Header = () => {
    return (
        <>
        <header className={styles.header}>
            <h1 className={styles.title}>pokemon list</h1>
            <div className={styles.buttons_container}>
                <button className={styles.favorites}>favorites</button>
                <button className={styles.comparison}>comparison</button>
            </div>
        </header>
        </>
    )
}

export default Header;