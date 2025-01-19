import styled from "styled-components";
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
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
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [bookName, setBookName] = useState('');
  const [bookInfo, setBookInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showButton, setShowButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const defaultBookInfo = {
    title: "기본서적을 추천합니다: 어린왕자",
    author: "생택쥐페리",
    classification: "문학",
    publisher: "멋사",
    pageCount: 120,
    image: "default_image.jpg"
  };

  const searchBook = async () => {
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await api.get(`reviewboard/search/?q=${encodeURIComponent(bookName)}`);
      if (response.status === 200) {
        const data = response.data.data || [];
        setBookInfo(data.length > 0 ? data : Array(30).fill(defaultBookInfo));
      }
    } catch (error) {
      console.error('Error fetching book data:', error);
      setErrorMessage('책 정보를 불러오는 데 실패했습니다. 다시 시도해 주세요.');
      setBookInfo(Array(30).fill(defaultBookInfo));
    } finally {
      setLoading(false);
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

  const handleBookSelect = (book) => {
    navigate('/record/writereview', { state: book }); // 책 정보를 ReviewWrite로 전달
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
            <RecordButton />
          </>
        )}
        
        {loading ? <p>로딩 중...</p> : errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
          currentBooks.map((book, index) => (
            <SearchResultBlock
              key={index}
              image={book.image}
              title={book.title}
              author={book.author}
              category={book.classification}
              publisher={book.publisher}
              pageCount={book.pageCount}
              handleBookSelect={handleBookSelect} // handleBookSelect 전달// 클릭 시 책 정보 전달
            />
          ))
        )}
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