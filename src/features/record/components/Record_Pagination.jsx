import '../pages/BookSearch.css';

function Pagination({ totalItems, itemsPerPage, paginate, currentPage }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={() => paginate(currentPage - 1)}>{"<"}</button> // 이전 페이지 화살표
      )}
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }} // 현재 페이지 강조
        >
          {number}
        </button>
      ))}
      {currentPage < totalPages && (
        <button onClick={() => paginate(currentPage + 1)}>{">"}</button> // 다음 페이지 화살표
      )}
    </div>
  );
}

export default Pagination;
