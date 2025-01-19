import React from 'react'
import { BookStateBtn, ReviewBtnBox, ReviewContentBox, ReviewDateBox, ReviewInfoBox, ReviewTextBox, ReviewTitleBox } from './HomeStyled'
import { useNavigate } from 'react-router-dom'

function ReviewContent() {
  const navigate = useNavigate();
  return (
    <ReviewContentBox>
      <ReviewTitleBox>
        <h4>하늘과 바람과 별과 시</h4>
        <div>윤동주</div>
      </ReviewTitleBox>
      <BookStateBtn>읽는 중</BookStateBtn>
      <ReviewDateBox>시작: 2024.09.21</ReviewDateBox>
      <ReviewInfoBox>
        <img/>
        <ReviewTextBox>
          <div>마지막 기록: 2024.09.30</div>
          <h5>인상적이었던 구절</h5>
          <hr />
          <div>나는 살아있다</div>
          <h5>감상</h5>
          <hr />
          <div>서시로 알게 된 윤동주 시인인데 생각보다 시가 다 이뻐서 너무 다 이뻐서 재밌게 읽었다...</div>
          <ReviewBtnBox>
            <button onClick={() => navigate('/record')}>더보기</button>
          </ReviewBtnBox>
        </ReviewTextBox>
      </ReviewInfoBox>
    </ReviewContentBox>
  )
}

export default ReviewContent
