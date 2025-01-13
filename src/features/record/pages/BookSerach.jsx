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
  margin-top: 10px; /* 헤더 높이에 맞춰 여백 추가 */
  align-items: center;
  height: calc(100vh - 10px); /* 전체 높이에서 헤더 높이만큼 제외 */
  overflow-y: auto; /* 세로 스크롤 가능 */
`;

function BookSearch() {
  const [bookName, setBookName] = useState(''); // 검색할 책 이름 상태
  const [bookInfo, setBookInfo] = useState([]); // 검색 결과 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [itemsPerPage] = useState(5); // 페이지당 아이템 수

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

  return (
    <div className="book-search">
      <header className="header">
        <RecordLogo />
        <SearchBar 
          bookName={bookName} 
          setBookName={setBookName} 
          onSearch={searchBook} // 검색 함수 전달
        />
      </header>
      <BodyContainer>
        <div>
          {currentBooks.map((book, index) => (
            <SearchResultBlock
              key={index}
              image={book.image} // 기본 이미지 설정
              title={book.title}
              author={book.author}
              category={book.classification} // 예시 데이터에 따라 수정
              publisher={book.publisher}
              pageCount={book.pageCount}
            />
          ))}
        </div>
        
        {/* 페이지네이션 컴포넌트 사용 */}
        <Pagination 
          totalItems={bookInfo.length}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />

        <Link to={{
          pathname: "/writereview",
          state: bookInfo // 책 정보를 state로 전달
        }}>
          <RecordButton />
        </Link>
      </BodyContainer>
    </div>
  );
}

export default BookSearch;