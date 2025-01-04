import styled from 'styled-components';

// 스타일 정의...
const Block = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Image = styled.img`
  width: 80px;
  height: 110px;
  margin-right: 10px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 15px;
`;

const Author = styled.p`
  font-size: 12px;
`;

const Category = styled.p`
  font-size: 12px;
`;

const Publisher = styled.p`
  font-size: 12px;
`;

const PageCount = styled.p`
  font-size: 12px;
`;

function BookInfo({ image, title, author, category, publisher, pageCount }) {
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
    </Block>
  );
}

export default BookInfo;
