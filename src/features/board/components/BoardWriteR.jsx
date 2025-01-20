import React, { useState } from 'react'
import { BoardWriteBox, RadioBox, RadioBtnBox, WriteBox, WriteBtn } from './BoardStyled';
import { useNavigate } from 'react-router-dom';

function BoardWriteR() {
  const navigate = useNavigate();
  const [ radioBtn, setRadioBtn ] = useState(true);

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
        <h4>스포여부</h4>
        <RadioBtnBox>
          <label>
            <input
              type='radio'
              value={true}
              onChange={handleChange}
              checked={radioBtn === true}
            />
            포함
          </label>
          <label>
            <input
              type='radio'
              value={false}
              onChange={handleChange}
              checked={radioBtn === false}
            />
            미포함
          </label>
        </RadioBtnBox>
      </RadioBox>
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

export default BoardWriteR