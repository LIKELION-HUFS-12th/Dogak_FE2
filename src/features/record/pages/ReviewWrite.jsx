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
  margin-top: 450px;
  height: 120vh;
  overflow-y: auto; // 수직 스크롤 활성화
  padding: 20px; // 여백 추가
`;

const Header = styled.header`
  position: fixed;
  top: 0; 
  height: 160px; // 헤더 높이
  display: flex;
  align-items: center; 
  justify-content: center; // 가로 가운데 정렬
  background-color: #F0EBE4;
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

const ReviewInput = styled.textarea`
  width: 289px; 
  height: 53px; 
  background-color: white; 
  border-radius: 10px; 
  border: none;
  padding: 10px; 
  resize: none; // 크기 조절 비활성화
`;

const ReviewTextarea = styled.textarea`
  width: 289px; // 너비 설정
  height: 169px; // 높이 설정
  background-color: white; // 배경색
  border-radius: 10px; // 모서리 둥글게
  border: none; // 테두리 없애기
  padding: 10px; // 패딩 추가
  resize: none; // 크기 조절 비활성화
`;

const SubmitButton = styled.button`
  width: 100px; // 너비 설정
  height: 40px; // 높이 설정
  border-radius: 10px; // 모서리 둥글게
  background: rgba(67, 45, 45, 0.76); // 배경색 설정
  color: white; // 글자 색상
  border: none; // 테두리 없애기
  cursor: pointer; // 마우스 커서 변경
  margin-top: 20px; // 상단 여백 추가
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
  const [memorySentence, setMemorySentence] = useState(''); // 기억에 남는 문장 상태 관리
  const [review, setReview] = useState(''); // 감상 상태 관리

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

  const handleSubmit = () => {
    // 유효성 검사
    if (!startPage || !endPage || !memorySentence || !review) {
      alert("등록 실패(임시): 페이지 수, 기억에 남는 문장, 감상이 모두 입력되어야 합니다.");
      return;
    }

    const startNum = parseInt(startPage, 10);
    const endNum = parseInt(endPage, 10);
    
    if (isNaN(startNum) || isNaN(endNum) || startNum > endNum) {
      alert("등록 실패(임시): 유효하지 않은 페이지 범위입니다.");
      return;
    }

    alert("작성 완료되었습니다! (임시)");
  };

  return (
    <div>
      <Header>
        <RecordLogo />
      </Header>
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

        {/* 기억에 남는 문장을 입력받는 창 */}
        <h3>기억에 남는 문장</h3>
        <ReviewInput 
          placeholder="여기에 문장을 입력하세요..." 
          value={memorySentence} 
          onChange={(e) => setMemorySentence(e.target.value)} 
        />

        {/* 리뷰 작성 공간 */}
        <h3>리뷰 작성</h3>
        <ReviewTextarea 
          placeholder="리뷰를 작성하세요..." 
          value={review} 
          onChange={(e) => setReview(e.target.value)} 
        />

        {/* 제출 버튼 */}
        <SubmitButton type="button" onClick={handleSubmit}>새기기</SubmitButton>
      </BodyContainer>
    </div>
  );
}

export default ReviewWrite;
