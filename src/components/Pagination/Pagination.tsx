import Button from "../Button/Button";
import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <>
      <div className={styles.pagination_container}>
        <Button className={styles.button}>Previous</Button>
        <Button className={styles.page_number}>1</Button>
        <Button className={styles.button}>next</Button>
      </div>
    </>
  );
};

export default Pagination;
