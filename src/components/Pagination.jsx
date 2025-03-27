const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        className={`px-4 py-2 rounded ${
          page === 1 ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700"
        }`}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>
      <span className="px-4 py-2 bg-gray-800 rounded">
        {page} / {totalPages}
      </span>
      <button
        className={`px-4 py-2 rounded ${
          page === totalPages ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700"
        }`}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
