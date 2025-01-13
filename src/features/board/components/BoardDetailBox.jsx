import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

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
    <>
      <div>
        <div>
          <h3>이거 원래 이럼?;;</h3>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
      
        <div>
          <div><p>도서명 :</p><p>데미안(헤르만 헤세)</p></div>
          <div>한채채(2024.09.11 14:03)</div>
        </div>
      </div>
      {isExpanded
      ? <div>글의 내용을 볼 수 있어요</div>
      : <div>
          <p>스포주의</p>
          <p onClick={handleToggle}>본문 읽기</p>
        </div>
      }
      <button onClick={() => handleGoBack()}>돌아가기</button>
    </>
  )
}

export default BoardDetailBox
