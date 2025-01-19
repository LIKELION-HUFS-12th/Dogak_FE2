import React, { useEffect, useState } from 'react'
import { BoardContainer, SingleBoardBox } from './HomeStyled'
import axios from 'axios';

function BoardContent() {

  return (
    <BoardContainer>
        <SingleBoardBox>
          <div style={{width: '12px'}}>1</div>
          <div style={{width: '65px'}}>12-14-00:12</div>
          <h5>윤동주 시 중 제일 추천</h5>
          <div style={{width: '45px'}}>닉네임</div>
        </SingleBoardBox>
        <hr/>
      <button>더 보러가기</button>
    </BoardContainer>
  )
}

export default BoardContent
