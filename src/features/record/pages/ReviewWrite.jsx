import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BookInfo from '../components/Review_Bookinfo'; 
import RecordLogo from "../components/Record_Logo";
import './BookSearch.css'; 
import api from "../api/api"

const InputBox = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  color: black;
  background-color: white; 
  border: none;
  text-align: center; 
  margin: 0 5px; 
`;

const PageText = styled.span`
  font-weight: bold;
  font-size: 15px;
`;


const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px; /* 헤더 높이에 맞춰 여백 추가 */
  margin-bottom: 10px;
  align-items: center;

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
  margin-top: 0px; // 상단 여백 추가
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
  height: 40px; 
  background-color: white; 
  border-radius: 10px; 
  border: none;
  padding: 10px; 
  resize: none; // 크기 조절 비활성화
`;

const ReviewTextarea = styled.textarea`
  width: 289px; // 너비 설정
  height: 130px; // 높이 설정
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
  const bookInfo = location.state; // 전달된 state

  // bookInfo가 없으면 기본값 설정
  if (!bookInfo) {
    console.error("책 정보가 전달되지 않았습니다.");
    alert("책 정보가 전달되지 않았습니다.");
    return null; // 추가적인 처리
  }

  const { image, title, author, category, publisher, pageCount } = bookInfo;

  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');
  const [result, setResult] = useState('');
  const [memorySentence, setMemorySentence] = useState('');
  const [review, setReview] = useState('');

  // 컴포넌트가 처음 렌더링될 때 한 번만 책 정보를 콘솔에 찍기
  useEffect(() => {
    console.log("전달받은 책 정보:", bookInfo);
  }, [bookInfo]);

  const calculatePagesRead = (start, end) => {
    const startNum = parseInt(start, 10);
    const endNum = parseInt(end, 10);
    if (!isNaN(startNum) && !isNaN(endNum) && startNum <= endNum) {
      const pagesRead = endNum - startNum + 1;
      setResult(`${pagesRead}쪽을 읽으셨어요.`);
    } else {
      setResult('유효한 페이지 범위를 입력하세요');
    }
  };

  const handleStartChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setStartPage(value);
      calculatePagesRead(value, endPage);
    }
  };

  const handleEndChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setEndPage(value);
      calculatePagesRead(startPage, value);
    }
  };
  
  const handleSubmit = async () => {
    // 입력값 검증
    if (!startPage || !endPage || !memorySentence || !review) {
      alert("등록 실패: 페이지 수, 기억에 남는 문장, 감상이 모두 입력되어야 합니다.");
      return;
    }
  
    const startNum = parseInt(startPage, 10);
    const endNum = parseInt(endPage, 10);
  
    if (isNaN(startNum) || isNaN(endNum) || startNum > endNum) {
      alert("등록 실패: 유효하지 않은 페이지 범위입니다.");
      return;
    }
  
    // 로컬 스토리지에서 setpk 값 가져오기 (사용자 ID)
    const userid_pk = localStorage.getItem('setpk');
    console.log("로컬 스토리지에서 가져온 사용자 ID:", userid_pk);
  
    // bookInfo에서 책 ID 가져오기
    const booksid_pk = bookInfo.id; // 책 ID가 bookInfo에 있다고 가정
  
    // 요청 데이터 구성
    const requestData = {
      book_title: title,
      sentence: memorySentence,
      body: review,
      start_date: new Date().toISOString().split('T')[0], // 오늘 날짜
      start_page: startNum,
      end_page: endNum,
    };
  
    // 로컬 스토리지에서 토큰 가져오기
    const token = localStorage.getItem('access_token');
    console.log("로컬 스토리지에서 가져온 토큰:", token);
  
    if (!token) {
      console.error("토큰이 존재하지 않습니다.");
      alert("토큰이 존재하지 않습니다. 로그인이 필요합니다.");
      return;
    }
  
    // 요청 URL 구성
    const url = `http://dogakdogak.store/bankbook/bankbook_post/${userid_pk}/${booksid_pk}/`;
  
    // API 요청
    try {
      const response = await api.post(url, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("API 응답:", response);
      if (response.status === 201) {
        alert("작성 완료되었습니다!");
      }
    } catch (error) {
      console.error('Error submitting review:', error.response ? error.response.data : error.message);
      alert("등록 실패: 서버 오류입니다.");
    }
  };
  
  return (
    <div>
      <header className="header">
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
        {result && <ResultText>{result}</ResultText>}

        <h3>기억에 남는 문장</h3>
        <ReviewInput 
          placeholder="여기에 문장을 입력하세요..." 
          value={memorySentence} 
          onChange={(e) => setMemorySentence(e.target.value)} 
        />
        
        <h3>리뷰 작성</h3>
        <ReviewTextarea 
          placeholder="리뷰를 작성하세요..." 
          value={review} 
          onChange={(e) => setReview(e.target.value)} 
        />
        <SubmitButton type="button" onClick={handleSubmit}>새기기</SubmitButton>

        
      </BodyContainer>
    </div>
  );
}

export default ReviewWrite;