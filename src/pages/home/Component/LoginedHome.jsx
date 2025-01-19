import React from 'react'
import ReviewContent from './ReviewContent'
import { HomeContainer } from './HomeStyled'
import BoardContent from './BoardContent'
import BooksContent from './BooksContent'

function LoginedHome() {
  return (
    <HomeContainer>
      <h3>나의 최근 기록</h3>
      <ReviewContent/>
      <h3>독서 이야기</h3>
      <BoardContent />
      <h3>지금 뜨는 도서</h3>
      <BooksContent />
    </HomeContainer>
  )
}

export default LoginedHome
