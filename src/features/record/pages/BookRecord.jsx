import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from "../api/api"; // API 요청을 위한 모듈
import recordLogo from '../../../assets/img/recordLogo.svg'; // 로고 이미지 임포트

const Container = styled.div`
  padding: 20px;
`;

const RecordContainer = styled.div`
  background-color:rgba(67, 45, 45, 0.53); /* 배경색 */
  border-radius: 10px; 
  padding: 10px;
  margin-top: 20px;
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


const RecordItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px 0;
  cursor: pointer;
  background-color: white;
  border-radius:10px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DetailContainer = styled.div`
  margin-top: 10px;
`;

function BookRecord() {
  const [records, setRecords] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null); // 선택된 항목의 인덱스
  const userid_pk = 3; // 예시로 사용자 ID를 지정 (실제 데이터에 따라 변경)

  // API 요청
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await api.get(`/bankbook/bankbook/${userid_pk}/`);
        if (response.status === 200) {
          setRecords(response.data.data); // 응답 데이터에서 책 목록을 설정
          console.log("받은 응답 데이터:", response.data.data); // 응답 데이터 콘솔 출력
        }
      } catch (error) {
        console.error("API 요청 실패:", error);
      }
    };

    fetchRecords();
  }, [userid_pk]);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // 클릭한 항목의 세부 정보를 토글
  };

  return (
    <Container>
      <Logo src={recordLogo} alt="Record Logo" /> {/* 로고 추가 */}
      <RecordContainer>
        {records.length > 0 ? (
          records.map((record, index) => (
            <RecordItem key={index} onClick={() => toggleDetails(index)}>
              <div>제목: {record.book_title}</div>
              <div>{record.start_page}p ~ {record.end_page}p</div>
              {expandedIndex === index && ( // 선택된 항목의 세부 정보 표시
                <DetailContainer>
                  <div>책 속 문장: {record.sentence}</div>
                  <div>감상: {record.body}</div>
                </DetailContainer>
              )}
            </RecordItem>
          ))
        ) : (
          <div>기록이 없습니다.</div> // 데이터가 없을 때 메시지 표시
        )}
      </RecordContainer>
    </Container>
  );
}

export default BookRecord;
