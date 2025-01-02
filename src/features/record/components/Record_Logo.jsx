import RecordLogoimg from "../../../assets/img/Record_Logo.svg"
import styled from "styled-components";



const LogoContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const RecordLogo = () => {
    return (
      <LogoContainer>
        <img src={RecordLogoimg} alt="Record Logo" />
      </LogoContainer>
    );
  };
  
  export default RecordLogo;