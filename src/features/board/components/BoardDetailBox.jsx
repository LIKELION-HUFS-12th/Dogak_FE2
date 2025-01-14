import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PostBodyBox, PostBtnBox, PostContainer, PostInfoBox, PostSpoilerBtn, PostTitle, PostTitleBox, SmallBtn } from './BoardStyled';

function BoardDetailBox() {
  const [isExpanded, setIsExpended] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const PostType = params.type;
  const PostId = params.id;

  const handleToggle = () => {
    setIsExpended(!isExpanded);
  }

  const handleGoBack = () => {
    navigate(-1);
  }

  return (
    <PostContainer>
      <PostTitleBox>
        <PostTitle>
          <h3>이거 원래 이럼?;;</h3>
          <div>
            <SmallBtn color="#000" Bgcolor='#e5a34d'>수정</SmallBtn>
            <SmallBtn color="#000" Bgcolor='#d9d9d9'>삭제</SmallBtn>
          </div>
        </PostTitle>
      
        <PostInfoBox>
          <div>도서명 : 데미안(헤르만 헤세)</div>
          <div>한채채(2024.09.11 14:03)</div>
        </PostInfoBox>
      </PostTitleBox>
      {isExpanded
      ? <PostBodyBox>이제 글의 내용을 볼 수 있어요</PostBodyBox>
      : <PostBodyBox>
          <div>이 글은 스포일러를 포함하고 있습니다.</div>
          <PostSpoilerBtn onClick={handleToggle}>본문 읽기</PostSpoilerBtn>
        </PostBodyBox>
      }
      <PostBtnBox>
        <SmallBtn Bgcolor="#656565" onClick={() => handleGoBack()}>돌아가기</SmallBtn>
      </PostBtnBox>
      
    </PostContainer>
  )
}

export default BoardDetailBox
