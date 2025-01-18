import React from 'react'
import { Body, ThinLogo } from '../../../components/Styled'
import LoginLogo from '../../../assets/img/login_logo.svg'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import { GuideBox } from '../AuthStyled'

function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <ThinLogo src={LoginLogo}/>
      <Body>
        <Login />
        <GuideBox>
          <div>아직 계정이 없다면?</div>
          <button onClick={() => navigate('/signup')}>회원가입 하기</button>
        </GuideBox>
      </Body>
    </>
  )
}

export default LoginPage
