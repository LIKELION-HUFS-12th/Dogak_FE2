import {useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BookInfo from '../components/Review_Bookinfo'; 
import RecordLogo from "../components/Record_Logo";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function ReviewWrite() {
  const location = useLocation(); // 현재 위치 정보 가져오기
  const { image, title, author, category, publisher, pageCount } = location.state || {}; // 전달된 state 해체
  console.log("오류:",location.state); // 상태 확인

  const hardcodedBookInfo = {
    image: "아직안정한한image.jpg",
    title: "로딩안됨: 하늘과 바람과 별과 시",
    author: "윤동주",
    category: "문학(800)",
    publisher: "한빛미디어",
    pageCount: "280",
  };

  const bookInfo = title ? { image, title, author, category, publisher, pageCount } : hardcodedBookInfo;

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
      </BodyContainer>

      <form>
        <textarea placeholder="리뷰를 작성하세요..." />
        <button type="submit">리뷰 제출</button>
      </form>
    </div>
  );
}

export default ReviewWrite;