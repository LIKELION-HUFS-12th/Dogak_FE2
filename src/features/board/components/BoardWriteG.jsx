import React, { useState } from 'react'
import { BoardWriteBox, RadioBox, RadioBtnBox, WriteBox, WriteBtn } from './BoardStyled';
import { useNavigate } from 'react-router-dom';

function BoardWriteG() {
  const navigate = useNavigate();
  const [ radioBtn, setRadioBtn ] = useState("online");

  const handleChange = (e) => {
    setRadioBtn(e.target.value);
  }

  return (
    <>
      <WriteBox>
        <h4>제목</h4>
        <input />
      </WriteBox>
      <WriteBox>
        <h4>도서명</h4>
        <input />
      </WriteBox>
      <RadioBox>
        <h4>모임형태</h4>
        <RadioBtnBox>
          <label>
            <input
              type='radio'
              value="online"
              onChange={handleChange}
              checked={radioBtn === "online"}
            />
            온라인
          </label>
          <label>
            <input
              type='radio'
              value="offlie"
              onChange={handleChange}
              checked={radioBtn === "offlie"}
            />
            오프라인
          </label>
        </RadioBtnBox>
      </RadioBox>
      <WriteBox>
        <h4>모임명세</h4>
        <input />
      </WriteBox>
      <WriteBox>
        <h4>모집인원</h4>
        <input />
      </WriteBox>
      <BoardWriteBox>
        <textarea name="content" id="content" cols='53' rows="15"></textarea>
      </BoardWriteBox>
      <div>
        <WriteBtn>작성취소</WriteBtn>
        <WriteBtn bgcolor='#d89336'
        onClick={() => navigate('/board/complete')}>업로드</WriteBtn>
      </div>
    </>
  )
}

export default BoardWriteG
