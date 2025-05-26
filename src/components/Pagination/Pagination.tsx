import { getPageNumbers, getTotalPages } from "../../utils/pagination";
import Button from "../Button/Button";
import styles from "./Pagination.module.css";

type PaginationProps = {
  totalCount: number | undefined;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  totalCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = totalCount ? getTotalPages(totalCount) : 0;
  const pageNumbers = totalCount ? getPageNumbers(totalCount, currentPage) : [];
  console.log(getPageNumbers(100, 2));
  return (
    <>
      <div className={styles.pagination_container}>
        <Button
          className={styles.button}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {pageNumbers.map((num, index) => (
          <Button
            key={index}
            className={styles.page_number}
            onClick={() => typeof num === "number" && onPageChange(num)}
            disabled={typeof num === "string" || currentPage === num}
          >
            {num}
          </Button>
        ))}
        <Button
          className={styles.button}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default Pagination;
