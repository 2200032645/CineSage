import React from 'react';

const Pages = ({ currentPage, totalPages, onNextPage, onPreviousPage }) => {
  return (
    <div className="pagination">
      <button onClick={onPreviousPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>
    </div>
  );
};

export default Pages;
