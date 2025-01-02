import styled from "styled-components";

import RecordLogo from "../components/Record_Logo";
import SearchBar from "../components/SearchBar";
import RecordButton from "../components/PastRecord";

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
      <RecordButton/>
    </BodyContainer>

    </div>
    );
  };
  
  export default BookSearch;