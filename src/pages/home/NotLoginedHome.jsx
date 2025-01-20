import React from 'react'
import "../../index.css"
import { Body, NewLogo } from '../../components/Styled'
import Logo from '../../assets/img/Logo_home.svg'
import BooksContent from './Component/BooksContent'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  button {
    font-size: 20px;
    background-color: #d89336;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: #ffc170;
    }
  }
`

function NotLoginedHome() {
  const navigate = useNavigate();

  return (
    <div id='app'>
      <NewLogo src={Logo}/>
      <Body>
        <h3>인기있는 도서</h3>
        <BooksContent/>
        <Button>
          <p>로그인하고 같이 기록해요!</p>
          <button onClick={() => navigate('/login')}>로그인하기</button>
        </Button>
      </Body>
    </div>
  )
}

export default NotLoginedHome
