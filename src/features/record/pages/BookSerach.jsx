import styled from "styled-components";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  margin-top:10px; /* 헤더 높이에 맞춰 여백 추가 */
  align-items: center;
  height: calc(130vh - 100px); /* 전체 높이에서 헤더 높이만큼 제외 */
  overflow-y: auto; /* 세로 스크롤 가능 */
  padding-bottom:20px;
`;

// 버튼 스타일 정의
const MyrecordButton = styled.button`
  width: 276px;
  height: 41px;
  border-radius: 5px;
  background-color: #A3C2DC;
  border: none; /* 테두리 없애기 */
  cursor: pointer; /* 커서 포인터로 변경 */
  margin-top: 10px; /* SearchBar와 버튼 간의 간격 */
  font-size: 16px; /* 버튼 텍스트 크기 */
`;

function BookSearch() {
  const [bookName, setBookName] = useState(''); // 검색할 책 이름 상태
  const [bookInfo, setBookInfo] = useState([]); // 검색 결과 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [itemsPerPage] = useState(5); // 페이지당 아이템 수
  const [showButton, setShowButton] = useState(true); // 버튼 표시 상태

  // 기본 책 정보 (어린왕자)
  const defaultBookInfo = {
    title: "기본서적을 추천합니다: 어린왕자",
    author: "생택쥐페리",
    classification: "문학",
    publisher: "멋사",
    pageCount: 120,
    image: "default_image.jpg" // 기본 이미지 설정
  };

  // 책 검색 함수
  const searchBook = async () => {
    try {
      const response = await api.get(`book_search/${bookName}/`);
      if (response.status === 200) {
        const data = response.data.data; // 결과 데이터
        if (data.length > 0) {
          setBookInfo(data); // 모든 검색 결과로 상태 업데이트
        } else {
          // 결과가 없을 경우 기본 책 정보 30개 배열로 설정
          setBookInfo(Array(30).fill(defaultBookInfo));
        }
      }
    } catch (error) {
      console.error('Error fetching book data:', error);
      // 오류 발생 시 기본 책 정보 30개 배열로 설정
      setBookInfo(Array(30).fill(defaultBookInfo));
    }
  };

  // 페이지 변경 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 현재 페이지에 해당하는 결과들 가져오기
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = bookInfo.slice(indexOfFirstBook, indexOfLastBook);

  // 검색창 클릭 시 버튼 숨기기
  const handleSearchBarFocus = () => {
    setShowButton(false);
  };

  // 검색 완료 후 버튼 보이기
  const handleSearch = () => {
    searchBook();
    setShowButton(false); // 검색 후 버튼 숨기기
  };

  return (
    <div className="book-search">
      <header className="header">
        <RecordLogo />
        <SearchBar 
          bookName={bookName} 
          setBookName={setBookName} 
          onSearch={handleSearch} // 검색 함수 전달
          onFocus={handleSearchBarFocus} // 검색창 포커스 시 버튼 숨기기
        />
      </header>
      <BodyContainer>
        {showButton && (
          <>
          <h3> 또는 </h3>
          <MyrecordButton onClick={() => alert("기록 페이지로 이동")}>
            내가 새긴 기록 보러가기
          </MyrecordButton>
          </>
        )}
        
        {currentBooks.map((book, index) => (
          <SearchResultBlock
            key={index} // 고유 키 추가
            image={book.image}
            title={book.title}
            author={book.author}
            category={book.classification}
            publisher={book.publisher}
            pageCount={book.pageCount}
          />
        ))}
        
        {/* Pagination을 BodyContainer 내에 위치 */}
        <Pagination 
          totalItems={bookInfo.length}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </BodyContainer>
    </div>
  );
}

export default BookSearch;