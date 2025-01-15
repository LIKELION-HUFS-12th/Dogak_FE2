import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginBar, LoginBtn, LoginContainer, LoginInfoBox } from '../AuthStyled';

function Login() {
  const [ userId, setUserId ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'https://dogakdogak.store',
  })

  const login = async () => {

    try {
      //로그인 api 호출
      const response = await api.post('/auth/login', {
        user_id: userId,
        password: password,
      });
      console.log('로그인 성공', response.data)
      setUserId('')
      setPassword('')
      localStorage.setItem("access", response.data.access)
      navigate('/', {replace: true});
      return response.data;
    } catch (error) {
      console.error('에러: ', error)
      setUserId('')
      setPassword('')
      return error;
    }
  }


  return (
    <LoginContainer>
      <LoginBar 
        type='text'
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
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
        <a onClick={() => navigate('/login/find')}>비밀번호/아이디 찾기</a>
      </LoginInfoBox>
    </LoginContainer>
  )
}

export default Login
