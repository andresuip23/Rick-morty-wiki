import { useState } from "react";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const [page, setPage] = useState(currentPage);
  const handlePrevPage = () => {
      const newPage = page - 1;
      setPage(newPage);
      onPageChange(newPage);
  };

  const handleNextPage = () => {
      const newPage = page + 1;
      setPage(newPage);
      onPageChange(newPage);
  };

  return (
    <div className="flex justify-evenly my-4 p-4">
      {(page != 1)?<button
        className=" px-6 py-3 bg-blue-600 text-white rounded-lg mr-2 hover:bg-gray-200 hover:text-black"
        onClick={handlePrevPage}
      >
        Prev
      </button>:''}
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg  hover:bg-gray-200 hover:text-black"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;