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
  const totalPages = totalCount ? Math.ceil(totalCount / 20) : 0;
  const pageNumbers = [];

  const range = 1;
  const startPage = Math.max(1, currentPage - range);
  const endPage = Math.min(totalPages, currentPage + range);

  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) pageNumbers.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

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
