import React, { useEffect, useState } from 'react'
import { SignupContainer, InputBox, SignupBox } from '../AuthStyled'
import api from '../api';

function Signup() {
  const [ formData, setFormData ] = useState({
    username: "",
    password: "",
    userid: "3",
    name: "",
    gender: "",
    age: "",
    region: "",
    email: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await api.post("member/register/", formData)
      console.log('회원가입 성공', response.data)
    } catch (error) {
      return error;
    }
  }

  return (
    <SignupContainer onSubmit={handleRegister}>
      <div>
        <label>아이디</label>
        <input
          type="text"
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>이메일</label>
        <input
          type="text"
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>비밀번호</label>
        <InputBox>
          <input
            type="password"
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          {/* <input
            type="password"
            id='repeat-password'
            name='repeat-password'
            value={formData.password}
            onChange={handleChange}
            required
          /> */}
          <p>*비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 함.</p>
        </InputBox>
      </div>
      <SignupBox>
        <label>이름</label>
        <input
          type="text"
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
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
          required
          />
      </SignupBox>
      <div>
        <div>성별</div>
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
      </div>
      <button type='submit'>회원가입</button>
    </SignupContainer>
  )
}

export default Signup
