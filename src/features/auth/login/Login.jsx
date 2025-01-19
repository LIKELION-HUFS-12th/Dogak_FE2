import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LoginBar, LoginBtn, LoginContainer, LoginInfoBox } from '../AuthStyled';
import api from '../api';
import axios from 'axios';

function Login() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();

    try {
      //로그인 api 호출
      const response = await api.post('/member/login/', {
        username,
        password,
      });
      console.log('로그인 성공', response.data)

      localStorage.setItem("access", response.data.access)
      setUsername('')
      setPassword('')
      
      navigate('/', {replace: true});
    } catch (error) {
      console.error('에러: ', error)
      setUsername('')
      setPassword('')
      return error;
    }
  }


  return (
    <LoginContainer>
      <LoginBar 
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='아이디를 입력하세요'
      />
      <LoginBar
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='비밀번호를 입력하세요'
      />
      <LoginBtn onClick={login}>Login</LoginBtn>
      <LoginInfoBox>
        <Link to='login/find'>비밀번호/아이디 찾기</Link>
      </LoginInfoBox>
    </LoginContainer>
  )
}

export default Login
