import styled from "styled-components";
import { Link } from 'react-router-dom';

import RecordLogo from "../components/Record_Logo";
import SearchBar from "../components/SearchBar";
import RecordButton from "../components/PastRecord";
import SearchResultBlock from "../components/SearchResult";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BookSearch() {
  // 책 정보를 하드코딩하여 관리
  const bookInfo = {
    image: "아직안정한한image.jpg", // 이미지 경로
    title: "하늘과 바람과 별과 시",
    author: "윤동주",
    category: "문학(800)",
    publisher: "한빛미디어",
    pageCount: "280",
  };

  return (
    <div>
      <header>
        <RecordLogo />
      </header>
      <BodyContainer>
        <SearchBar />
        <SearchResultBlock
          image={bookInfo.image}
          title={bookInfo.title}
          author={bookInfo.author}
          category={bookInfo.category}
          publisher={bookInfo.publisher}
          pageCount={bookInfo.pageCount}
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