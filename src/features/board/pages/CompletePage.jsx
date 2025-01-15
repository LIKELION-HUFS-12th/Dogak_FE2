import React from 'react'
import thumsup from '../../../assets/icon/Thumbs Up.svg'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  font-size: 18px;

  img {
    width: 50px;
    height: 50px;
  }

  button {
    width: 170px;
    height: 30px;
    margin: 10px;
    border: none;
    background-color: #d9d9d9;
    font-size: 18px;
  }
`

function CompletePage() {
  const navigate = useNavigate();

  return (
    <Body>
      <img src={thumsup}/>
      <p className='.bmjuaclass'>게시글 작성 완료</p>
      <button onClick={() => navigate('/board/group')}>목록</button>
      <button onClick={() => navigate('/board/my')}>내가 쓴 글</button>
    </Body>
  )
}

export default CompletePage
