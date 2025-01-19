import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from "../api/api"; // API 요청을 위한 모듈

const Container = styled.div`
  padding: 20px;
`;

const RecordListContainer = styled.div`
  margin-top: 20px;
`;

const RecordItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  margin-right: 20px;
`;

function BookRecord() {
  const [records, setRecords] = useState([]);
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

  return (
    <Container>
      <h1>내 책 기록</h1>
      <RecordListContainer>
        <HeaderRow>
          <HeaderItem>제목</HeaderItem>
          <HeaderItem>문장</HeaderItem>
          <HeaderItem>내용</HeaderItem>
          <HeaderItem>시작 페이지</HeaderItem>
          <HeaderItem>끝 페이지</HeaderItem>
        </HeaderRow>
        {records.length > 0 ? (
          records.map((record, index) => (
            <RecordItem key={index}>
              <div>제목: {record.book_title}</div>
              <div>문장: {record.sentence}</div>
              <div>내용: {record.body}</div>
              <div>시작 페이지: {record.start_page}</div>
              <div>끝 페이지: {record.end_page}</div>
            </RecordItem>
          ))
        ) : (
          <div>기록이 없습니다.</div> // 데이터가 없을 때 메시지 표시
        )}
      </RecordListContainer>
    </Container>
  );
  
}

export default BookRecord;
