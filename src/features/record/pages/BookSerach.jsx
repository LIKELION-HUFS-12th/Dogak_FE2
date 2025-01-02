import styled from "styled-components";

import RecordLogo from "../components/Record_Logo";
import SearchBar from "../components/SearchBar";
import RecordButton from "../components/PastRecord";
import SearchResultBlock from "../components/SearchResult";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function BookSearch(){
    return (
    <div>
        
      <header>
        <RecordLogo/>
      </header>
    <BodyContainer>
      <SearchBar/>
      <SearchResultBlock
                image="아직안정한한image.jpg" // 이미지 경로
                title="하늘과 바람과 별과 시"
                author="윤동주"
                category="문학(800)"
                publisher="한빛미디어"
                pageCount="280"
      
      />
      <RecordButton/>
      
    </BodyContainer>

    </div>
    );
  };
  
  export default BookSearch;