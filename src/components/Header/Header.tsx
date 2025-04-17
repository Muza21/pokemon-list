import Button from "../Button/Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>pokemon list</h1>
        <div className={styles.buttons_container}>
          <Button className={styles.favorites}>favorites</Button>
          <Button className={styles.comparison}>comparison</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
