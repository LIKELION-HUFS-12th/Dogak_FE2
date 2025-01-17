import styled from "styled-components"

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`

export const LoginBar = styled.input`
  width: 320px;
  height: 60px;
  border: solid 1px #432d2d;
  border-radius: 5px;
  background-color: #f5f5f5;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 14px;
`

export const LoginBtn = styled.button`
  width: 340px;
  height: 60px;
  border: solid 1px #432d2d;
  border-radius: 5px;
  background-color: #432d2d;
  margin: 40px 0 10px;
  font-size: 28px;
  color: #fff;
`

export const LoginInfoBox = styled.div`
  width: 340px;
  display: flex;
  justify-content: right;
`

export const GuideBox = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
  margin: 100px 0;
  font-size: 14px;
  align-items: end;

  button {
    width: 180px;
    height: 50px;
    font-size: 20px;
    background-color: #d89336;
    color: #f5f5f5;
    border: none;
    border-radius: 10px;
  }
`

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SignupLabel = styled.label`
  display: flex;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`