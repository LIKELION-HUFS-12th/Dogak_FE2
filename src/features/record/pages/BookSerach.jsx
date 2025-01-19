import styled from "styled-components";
import React, { useState } from 'react';
import api from '../api/api';
import './BookSearch.css'; // CSS 파일 임포트
import RecordLogo from "../components/Record_Logo";
import SearchBar from "../components/SearchBar";
import RecordButton from "../components/PastRecord";
import SearchResultBlock from "../components/SearchResult";
import Pagination from "../components/Record_Pagination";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1; /* 나머지 공간을 차지 */
  overflow-y: auto; /* 세로 스크롤 가능 */
  padding: 20px; /* 패딩 추가 */
`;

function BookSearch() {
  const [bookName, setBookName] = useState('');
  const [bookInfo, setBookInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showButton, setShowButton] = useState(true);

  const defaultBookInfo = {
    title: "기본서적을 추천합니다: 어린왕자",
    author: "생택쥐페리",
    classification: "문학",
    publisher: "멋사",
    pageCount: 120,
    image: "default_image.jpg"
  };

  const searchBook = async () => {
    try {
      const response = await api.get(`reviewboard/search/?q=${encodeURIComponent(bookName)}`);
      console.log(response.data);
  
      if (response.status === 200) {
        const data = response.data.data || [];
        if (data.length > 0) {
          setBookInfo(data);
        } else {
          setBookInfo(Array(30).fill(defaultBookInfo));
        }
      }
    } catch (error) {
      console.error('Error fetching book data:', error);
      setBookInfo(Array(30).fill(defaultBookInfo));
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = bookInfo.slice(indexOfFirstBook, indexOfLastBook);
  const handleSearchBarFocus = () => setShowButton(false);
  const handleSearch = () => {
    searchBook();
    setShowButton(false);
  };

  return (
    <div className="book-search">
      <header className="header">
        <RecordLogo />
        <SearchBar 
          bookName={bookName} 
          setBookName={setBookName} 
          onSearch={handleSearch}
          onFocus={handleSearchBarFocus}
        />
      </header>
      <BodyContainer>
        {showButton && (
          <>
          <h3> 또는 </h3>
          <RecordButton/>
          </>
        )}
        
        {currentBooks.map((book, index) => (
          <SearchResultBlock
            key={index}
            image={book.image}
            title={book.title}
            author={book.author}
            category={book.classification}
            publisher={book.publisher}
            pageCount={book.pageCount}
          />
        ))}
        

      </BodyContainer>
      <Pagination 
          totalItems={bookInfo.length}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
    </div>
  );
}

export default BookSearch;
