import React, { useState } from 'react';
import styled from 'styled-components';
import RecordButton from "../components/PastRecord"
import recordLogo from '../../../assets/img/recordLogo.svg'; // 로고 이미지 임포트
import GotoWriteButton from '../components/GotoWriteButton';

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.img`
  padding-top: 30px;
  padding-bottom: 10px;
  height: 130px;
  top: 0;
  position: sticky; /* 또는 fixed로 변경 가능 */
  z-index: 100;
  background-color: #f0ebe4;
`;

const DetailContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 300px; 
  background-color: rgba(225, 201, 169, 0.76); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 내용 상단 정렬 */
  border-radius: 10px; 
  padding: 10px; 
  max-height: 400px; /* 최대 높이 설정 (선택 사항) */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 가능 */
`;

const BookImage = styled.img`
  width: 200px; /* 책 이미지 크기 조절 */
  height: auto;
  margin-bottom: 10px;
`;

// 새로운 RecordListContainer 스타일 정의
const RecordListContainer = styled.div`
  width: 356px;
  height: 301px;
  border-radius: 10px;
  background: rgba(67, 45, 45, 0.68);
  padding: 10px; /* 내용과 경계 간격 조정 (선택 사항) */
  margin-top: 20px;
  display: flex;
  flex-direction: column; /* 리스트를 수직으로 나열 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 가능 */
`;

const RecordList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const RecordItem = styled.li`
  display: flex; /* 플렉스 박스 사용 */
  padding: 8px; /* 패딩 조정 */
  border: 1px solid #ccc;
  margin: 5px 0;
  cursor: pointer;
  background-color: #D9D9D9; /* 기본 배경색 설정 */
  font-size: 12px; /* 폰트 크기 조정 */

  &:hover {
    background: #f0f0f0; /* hover 시 배경색 변경 */
    font-weight: bold; /* hover 시 글자가 bold 처리 */
  }

  /* 선택된 경우 */
  ${(props) => props.isSelected && `
    background: #f0f0f0;
    font-weight: bold;
  `}
`;

const ItemCell = styled.div`
  flex: 1; /* 각 셀의 너비를 동일하게 설정 */
  text-align: center; /* 중앙 정렬 */
`;

// 날짜 전용 스타일
const DateCell = styled(ItemCell)`
  font-size: 10px; /* 날짜 폰트 크기 조정 */
`;

const HeaderRow = styled.div`
  display: flex;
  font-weight: bold;
  margin-bottom: 5px;
`;

const HeaderItem = styled(ItemCell)`
  /* 헤더와 일반 항목의 스타일을 공유 */
`;

function BookRecord() {
  const [selectedRecord, setSelectedRecord] = useState(null);

  // 예시 데이터
  const records = [
    { 
      id: 1, 
      date: '2023-10-01', 
      title: '어린왕자', 
      author: '생택쥐페리', 
      publisher: '민음사', 
      progress: '100%', 
      totalCopies: 10,
      detail: '어린왕자는 외로운 우주를 여행하는 어린 왕자와 그의 성장을 다룬 이야기입니다.', 
      image: 'https://example.com/image1.jpg' // 책 이미지 URL
    },
    { 
      id: 2, 
      date: '2023-10-15', 
      title: '1984', 
      author: '조지 오웰', 
      publisher: '문학동네', 
      progress: '80%', 
      totalCopies: 5,
      detail: '1984는 전체주의 사회를 배경으로 한 디스토피아 소설로, 언론 통제와 개인의 자유를 다룹니다.', 
      image: 'https://example.com/image2.jpg' // 책 이미지 URL
    },
    { 
      id: 3, 
      date: '2023-10-20', 
      title: '오만과 편견', 
      author: '제인 오스틴', 
      publisher: '북하우스', 
      progress: '60%', 
      totalCopies: 2,
      detail: '사회적 지위와 결혼을 주제로 한 소설로, 엘리자베스와 다아시의 사랑 이야기를 담고 있습니다.', 
      image: 'https://example.com/image3.jpg' // 책 이미지 URL
    },
  ];

  const handleRecordClick = (record) => {
    setSelectedRecord(selectedRecord?.id === record.id ? null : record); // 클릭한 기록이 선택된 경우 해제
  };

  return (
    <Container>
      <Logo src={recordLogo} alt="Record Logo" /> {/* 로고 추가 */}
      
      <DetailContainer>
        {selectedRecord && (
          <>
            <h2>{selectedRecord.title}</h2>
            <BookImage src={selectedRecord.image} alt={selectedRecord.title} /> {/* 책 이미지 */}
            <p>{selectedRecord.detail}</p>
          </>
        )}
      </DetailContainer>
      <GotoWriteButton/>
      {/* 새로운 RecordListContainer 추가 */}
      <RecordListContainer>
        <HeaderRow>
          <HeaderItem>날짜</HeaderItem>
          <HeaderItem>제목</HeaderItem>
          <HeaderItem>작가</HeaderItem>
          <HeaderItem>출판사</HeaderItem>
          <HeaderItem>진도</HeaderItem>
          <HeaderItem>누적</HeaderItem>
        </HeaderRow>
        <RecordList>
          {records.map((record) => (
            <RecordItem 
              key={record.id} 
              onClick={() => handleRecordClick(record)} 
              isSelected={selectedRecord?.id === record.id} // 선택된 경우 스타일 적용
            >
              <DateCell>{record.date}</DateCell>
              <ItemCell>{record.title}</ItemCell>
              <ItemCell>{record.author}</ItemCell>
              <ItemCell>{record.publisher}</ItemCell>
              <ItemCell>{record.progress}</ItemCell>
              <ItemCell>{record.totalCopies}</ItemCell>
            </RecordItem>
          ))}
        </RecordList>
      </RecordListContainer>
    </Container>
  );
}

export default BookRecord;
