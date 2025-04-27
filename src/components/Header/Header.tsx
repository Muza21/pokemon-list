import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link to="/" className={styles.link}>
            pokemon list
          </Link>
        </h1>
        <div className={styles.buttons_container}>
          <Link to="/favorites" className={styles.link}>
            <Button className={styles.favorites}>favorites</Button>
          </Link>
          <Link to="/comparison" className={styles.link}>
            <Button className={styles.comparison}>comparison</Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
