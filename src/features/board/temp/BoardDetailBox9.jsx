import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PostBodyBox, PostBtnBox, PostContainer, PostInfoBox, PostSpoilerBtn, PostTitle, PostTitleBox, SmallBtn } from '../components/BoardStyled';

function BoardDetailBox() {
  const [isExpanded, setIsExpended] = useState(true);
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
          <h3>나는야 특별해지고 싶은 사람</h3>
          <div>
            <SmallBtn color="#000" bgcolor='#e5a34d'>수정</SmallBtn>
            <SmallBtn color="#000" bgcolor='#d9d9d9'>삭제</SmallBtn>
          </div>
        </PostTitle>
      
        <PostInfoBox>
          <div>도서명 : 죄와 벌(도스토옙스키)</div>
          <div>한채채(2024.09.11 14:03)</div>
        </PostInfoBox>
      </PostTitleBox>
      {isExpanded
      ? <PostBodyBox>
        <div>모임 형태: 오프라인</div>
        <div>모임 명세: 격주 1회</div>
        <div>모임 인원: 4-6명(여성만)</div>
        <div>도서명: 죄와 벌(도스토옙스키)</div>
        <br />
        <br />
        <div>강남역 인근에서 2월 한달 간 죄와 벌 완독할 사람 구해용~<br/>격주 주말이나 수요일 즈음에 만나서 인상깊었던 구절이나 왜 게임에서 죄와 벌 캐릭터가 사랑받는지 토론하고 밥먹을 사람 구합니다.<br/><br/>제가 여자라 여자만 구해용. 관심있는 사람 연락주세요!</div>
      </PostBodyBox>
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
