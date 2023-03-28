import React from "react";
import { cx } from "emotion";
import { usePagination, DOTS, IPropsPagination } from "@/hooks/usePagination";
import { container } from "./_stylePagination";

const Pagination = (props: IPropsPagination) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage = 1,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange && onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange && onPageChange(currentPage - 1);
  };
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={container}>
      <li
        className={cx("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={cx("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange && onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={cx("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
