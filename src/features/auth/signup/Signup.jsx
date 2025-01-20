import React, { useEffect, useState } from 'react'
import { SignupContainer, SignupBox, PasswordBox, PasswordInputBox, SignupRadioBox, RadioLabel, RadioBox, SignupBtn, TermsAlert } from '../AuthStyled'
import api from '../api';
import SignupTerms from './SignupTerms';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState({
    username: "",
    password: "",
    name: "",
    gender: "",
    age: "",
    region: "",
    email: "",
  })
  const [ confrimPassword, setConfrimPassword ] = useState("");
  const [ error, setError ] = useState("");
  const [ isAgreed, setIsAgreed ] = useState(false)

  const handleAgreeChange = (checked) => {
    setIsAgreed(checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'age' ? Number(value) : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      alert("비밀번호가 조건을 만족하지 않습니다.")
      return
    } else if (error){
      alert("비밀번호가 일치하지 않습니다.")
      return
    } else if (!isAgreed) {
      return
    }

    try {
      console.log(formData)
      const response = await api.post("/member/register/", formData)
      console.log('회원가입 성공', response.data)
      localStorage.setItem("access", response.data.access)
      localStorage.setItem("setpk", response.data.user.id)
      navigate('/home', {replace: true})
    } catch (error) {
      console.log('회원가입 중 오류: ', error)
      alert('회원가입 중에 오류가 발생했습니다.')
      return error;
    }
  }

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  useEffect(() => {
    if (formData.password !== confrimPassword) {
      setError("*비밀번호가 일치하지 않습니다.");
    } else {
      setError(null)
    }
  }, [confrimPassword])

  return (
    <SignupContainer onSubmit={handleRegister}>
      <SignupBox>
        <label>아이디</label>
        <input
          type="text"
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='아이디'
          required
        />
      </SignupBox>
      <SignupBox>
        <label>이메일</label>
        <input
          type="text"
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='이메일'
          required
        />
      </SignupBox>
      <PasswordBox>
        <PasswordInputBox>
          <label>비밀번호</label>
          <input
            type="password"
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='비밀번호'
            required
          />
        </PasswordInputBox>
        {!validatePassword(formData.password) && (
          <small role='alert'>*비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 함.</small>
        )}
        <PasswordInputBox>
          <label></label>
          <input
            type="password"
            id='confrimPassword'
            name='confrimPassword'
            value={confrimPassword}
            onChange={(e) => setConfrimPassword(e.target.value)}
            placeholder='비밀번호 확인'
            required
          />
        </PasswordInputBox>
        {error && (
          <small role='alert'>*비밀번호가 일치하지 않습니다.</small>
        )}
      </PasswordBox>
      <SignupBox>
        <label>이름</label>
        <input
          type="text"
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='이름'
          required
          />
      </SignupBox>
      <SignupBox>
        <label>지역</label>
        <input
          type="text"
          id='region'
          name='region'
          value={formData.region}
          onChange={handleChange}
          placeholder='지역'
          required
          />
      </SignupBox>
      <SignupBox>
        <label>나이</label>
        <input
          type="number"
          id='age'
          name='age'
          value={formData.age}
          onChange={handleChange}
          min="0"
          placeholder='나이'
          required
          />
      </SignupBox>
      <SignupRadioBox>
        <RadioLabel>성별</RadioLabel>
        <RadioBox>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={formData.gender ==="female"}
              required
              />여성
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={formData.gender ==="male"}
              required
              />남성
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="undefined"
              onChange={handleChange}
              checked={formData.gender ==="undefined"}
              required
            />선택 안함
          </label>
        </RadioBox>
      </SignupRadioBox>
      <SignupTerms onAgree={handleAgreeChange} />
      <SignupBtn type='submit'>회원가입</SignupBtn>
      {!isAgreed && (
          <TermsAlert role='alert'>*약관에 동의 후 가입하실 수 있습니다.</TermsAlert>
        )}
    </SignupContainer>
  )
}

export default Signup
