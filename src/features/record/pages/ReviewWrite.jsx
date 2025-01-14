import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BookInfo from '../components/Review_Bookinfo'; 
import RecordLogo from "../components/Record_Logo";

const InputBox = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  color: black;
  background-color: white; // 배경색 추가
  border: none;
  text-align: center; // 텍스트 가운데 정렬
  margin: 0 5px; // 입력 박스 간격
`;

const PageText = styled.span`
  font-weight: bold;
  font-size: 15px;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageInputContainer = styled.div`
  display: flex; 
  flex-direction: column; // 세로 방향으로 정렬
  align-items: center; // 세로 가운데 정렬
  justify-content: center; // 가로 가운데 정렬
  margin-top: 10px; // 상단 여백 추가
`;

const PageInputRow = styled.div`
  display: flex; // 입력 박스와 텍스트를 가로로 정렬
  align-items: center; // 세로 가운데 정렬
`;

const ResultText = styled.p`
  margin-top: 20px;
  font-size: 15px; 
  font-weight: bold; 
`;

function ReviewWrite() {
  const location = useLocation(); // 현재 위치 정보 가져오기
  const { image, title, author, category, publisher, pageCount } = location.state || {}; // 전달된 state 해체
  console.log("오류:", location.state); // 상태 확인

  const hardcodedBookInfo = {
    image: "아직안정한한image.jpg",
    title: "로딩안됨: 하늘과 바람과 별과 시",
    author: "윤동주",
    category: "문학(800)",
    publisher: "한빛미디어",
    pageCount: "280",
  };

  const bookInfo = title ? { image, title, author, category, publisher, pageCount } : hardcodedBookInfo;

  // 읽은 쪽수 상태 관리
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');
  const [result, setResult] = useState('');

  const calculatePagesRead = (start, end) => {
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);
    if (!isNaN(startNum) && !isNaN(endNum) && startNum <= endNum) {
      const pagesRead = endNum - startNum + 1; // 읽은 페이지 수 계산
      setResult(`${pagesRead}쪽을 읽으셨어요.`);
    } else {
      setResult('유효한 페이지 범위를 입력하세요');
    }
  };

  const handleStartChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setStartPage(value);
      calculatePagesRead(value, endPage); // 시작 페이지가 변경될 때 계산
    }
  };

  const handleEndChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setEndPage(value);
      calculatePagesRead(startPage, value); // 끝 페이지가 변경될 때 계산
    }
  };

  return (
    <div>
      <header>
        <RecordLogo />
      </header>
      <BodyContainer>
        <BookInfo
          image={bookInfo.image}
          title={bookInfo.title}
          author={bookInfo.author}
          category={bookInfo.category}
          publisher={bookInfo.publisher}
          pageCount={bookInfo.pageCount}
        />
        <PageInputContainer>
          <h3>읽은 쪽 수</h3>
          <PageInputRow>
            <label>
              <InputBox
                type="text"
                value={startPage}
                onChange={handleStartChange}
                required
              />
            </label>
            <PageText>p ~</PageText>
            <label>
              <InputBox
                type="text"
                value={endPage}
                onChange={handleEndChange}
                required
              />
            </label>
            <PageText>p</PageText>
          </PageInputRow>
        </PageInputContainer>
        {result && <ResultText>{result}</ResultText>} {/* 결과 텍스트 표시 */}
      </BodyContainer>

      <form onSubmit={(e) => e.preventDefault()}>
        <textarea placeholder="리뷰를 작성하세요..." />
        <button type="submit">리뷰 제출</button>
      </form>
    </div>
  );
}

export default ReviewWrite;
