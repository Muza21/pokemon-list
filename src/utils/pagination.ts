export const getTotalPages = (totalCount: number) => Math.ceil(totalCount / 20);

export const getPageNumbers = (totalCount: number, currentPage: number) => {
  const totalPages = getTotalPages(totalCount);
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

  return pageNumbers;
};
