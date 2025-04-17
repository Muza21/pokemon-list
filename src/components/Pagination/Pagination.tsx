import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <>
      <div className={styles.pagination_container}>
        <button className={styles.button}>previous</button>
        <p className={styles.page_number}>1</p>
        <button className={styles.button}>next</button>
      </div>
    </>
  );
};

export default Pagination;
