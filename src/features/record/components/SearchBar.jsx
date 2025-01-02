import styled from 'styled-components';
import SearchIcon from '../../../assets/icon/icons_Search.png'; // 경로를 맞춰주세요.
import { Link } from 'react-router-dom'; // React Router 사용 시 필요한 경우

const SearchContainer = styled.div`
  position: relative; /* 아이콘 위치 조정을 위한 상대 위치 설정 */

  display: flex;
  flex-direction: column; 
  align-items: center;
`;

const Input = styled.input`
  width: 298px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #432D2D;
  background: #F5F5F5;
  padding: 0 20px 0 10px;
`;

const Icon = styled.img`
  position: absolute;
  right: 10px;
  top: 10%;
`;

const LinkText = styled(Link)`
  display: block;
  font-size: 10px;
  margin-top: 5px; 
  text-decoration: underline; 
  color: #656565;
  cursor: pointer;
  text-align: center; /* 텍스트 가운데 정렬 */
`;

function SearchBar() {
  return (
    <SearchContainer>
      <Input type="text" placeholder="기록할 책 이름을 검색해주세요" />
      <Icon src={SearchIcon} alt="검색 아이콘" />
      <LinkText to="#">찾는 책이 없으신가요?</LinkText>
    </SearchContainer>
  );
}

export default SearchBar;
