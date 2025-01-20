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
          <h3>파우누스 시리즈 같이 읽어요</h3>
          <div>
            <SmallBtn color="#000" bgcolor='#e5a34d'>수정</SmallBtn>
            <SmallBtn color="#000" bgcolor='#d9d9d9'>삭제</SmallBtn>
          </div>
        </PostTitle>
      
        <PostInfoBox>
          <div>도서명 : 백설공주에게 죽음을(넬레 노이하우스)</div>
          <div>한채채(2024.09.11 14:03)</div>
        </PostInfoBox>
      </PostTitleBox>
      {isExpanded
      ? <PostBodyBox>
        <div>모임 형태: 온라인</div>
        <div>모임 명세: 주 1회(요일 협의)</div>
        <div>모임 인원: 4명</div>
        <div>도서명: 백설공주에게 죽음을(넬레 노이하우스)</div>
        <br />
        <br />
        <div>독일 추리 소설 좋아하는 사람 모여라~<br/>얼마전에 재미있게 본 백설공주에게 죽음을 드라마가 책이 원작이라고 해서 읽기 시작했는데 재미있더라고요! 같은 세계관의 다른 추리소설도 많다고 해서 같이 백설공주의 죽음을로 파우누스 시리즈 함께 읽을 사람 구합니다.</div>
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
