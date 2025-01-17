import React from 'react'
import { SignupLabel, SignupContainer, InputBox } from '../AuthStyled'

function Signup() {
  return (
    <SignupContainer>
      <label>
        아이디
        <input type="text" />
      </label>
      <label>
        이메일
        <input type="text" />
      </label>
      <SignupLabel>
        비밀번호
        <InputBox>
          <input type="text" />
          <input/>
          <p>*비밀번호는 영문, 숫자, 특수문자를 포함하여 8자 이상이어야 함.</p>
        </InputBox>
      </SignupLabel>
      <SignupLabel>
        이름
        <input type="text" />
      </SignupLabel>
      <SignupLabel>
        나이
        <input type="text" />
      </SignupLabel>
      <div>
        <div>성별</div>
        <label>
          <input type="radio" name="" id="" />여성
        </label>
        <label>
          <input type="radio" name="" id="" />남성
        </label>
        <label>
          <input type="radio" name="" id="" />산택 안함
        </label>
      </div>
    </SignupContainer>
  )
}

export default Signup
