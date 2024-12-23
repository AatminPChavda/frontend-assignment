import React from "react";
import "./Pagination.css";
import { PAGINATION } from "../../constants";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div
      className="pagination"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <button
        aria-label={PAGINATION.PREVIOUS}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {PAGINATION.PREVIOUS}
      </button>
      <span aria-live="polite">
        {PAGINATION.PAGE_INFO(currentPage, totalPages)}
      </span>
      <button
        aria-label={PAGINATION.NEXT}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {PAGINATION.NEXT}
      </button>
    </div>
  );
}

export default Pagination;
