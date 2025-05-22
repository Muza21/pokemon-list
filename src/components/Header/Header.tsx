import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.css";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        animate={{ y: "0" }}
        transition={{ type: "spring" }}
        className={styles.header}
      >
        <motion.h1
          initial={{ borderBottom: "2px solid transparent" }}
          whileHover={{
            borderBottom: "2px solid currentColor",
          }}
          transition={{ duration: 0.2 }}
          whileTap={{ backgroundColor: "#000000", color: "#ffffff" }}
          className={styles.title}
        >
          <Link to="/" className={styles.link}>
            pokemon list
          </Link>
        </motion.h1>
        <div className={styles.buttons_container}>
          <Link to="/favorites" className={styles.link}>
            <Button className={styles.favorites}>favorites</Button>
          </Link>
          <Link to="/comparison" className={styles.link}>
            <Button className={styles.comparison}>comparison</Button>
          </Link>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
