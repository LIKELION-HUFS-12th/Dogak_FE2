import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Block = styled.div`
  width: 382px;
  height: 159px;
  border-radius: 10px;
  background: #E8E4DE;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 10px; 
  box-sizing: border-box; /* 패딩넣어도 사이즈가 변하지 않도록*/
`;

const Image = styled.img`
  width: 80px;
  height: 110px;
`;

const InfoContainer = styled.div`
  flex: 1; /* 남은 공간을 차지하도록 설정 */
  margin-left: 10px; /* 이미지와 간격 */
`;

const Title = styled.h3`
  font-size: 15px; /*bold가 없는대신 h3주니까 오히려 괜찮아보임???*/
  margin: 5px 0; /* 기본 마진 제거 */
`;

const Author = styled.p`
  font-size: 12px;
  font-weight: 600; /*bold보다 얇은데 이 폰트는 차이가 없음...*/
  margin: 0; 
`;

const Category = styled.p`
  font-size: 12px;
  margin:10px 0 0 0 ;
`;

const Publisher = styled.p`
  font-size: 12px;
  margin:3px 0;
`;

const PageCount = styled.p`
  font-size: 12px;
  margin: 3px 0;
`;

const SelectButton = styled(Link)`
  margin-left: 10px; /* 텍스트와 간격 */
  height: 30px; /* 버튼 높이 */

  border: none;
  background:none;
  color: black; 
  cursor: pointer; 
`;

function SearchResultBlock({ image, title, author, category, publisher, pageCount }) {
  return (
    <Block>
      <Image src={image} alt="책 이미지" />
      <InfoContainer>
        <Title>{title}</Title>
        <Author>작가: {author}</Author>
        <Category>분류: {category}</Category>
        <Publisher>출판사: {publisher}</Publisher>
        <PageCount>총 페이지 수: {pageCount}</PageCount>
      </InfoContainer>
      <SelectButton as = {Link} to={{
        pathname: "/writereview",
        state: { image, title, author, category, publisher, pageCount } // 정보 전달
      }}>
        선택하기
      </SelectButton>
    </Block>
  );
}

export default SearchResultBlock;