import { useLocation } from 'react-router-dom';
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

  // 책 정보를 하드코딩하여 관리
  const hardcodedBookInfo = {
    image: "아직안정한한image.jpg", // 이미지 경로
    title: "하늘과 바람과 별과 시",
    author: "윤동주",
    category: "문학(800)",
    publisher: "한빛미디어",
    pageCount: "280",
  };

  // 실제로 사용할 책 정보 결정
  const bookInfo = title ? { image, title, author, category, publisher, pageCount } : hardcodedBookInfo;

  return (
    <div>
      <header>
        <RecordLogo />
      </header>
      <div>
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

      </div>

      {/* 리뷰 작성 폼 추가 */}
      <form>
        <textarea placeholder="리뷰를 작성하세요..." />
        <button type="submit">리뷰 제출</button>
      </form>
    </div>
  );
}

export default ReviewWrite;
