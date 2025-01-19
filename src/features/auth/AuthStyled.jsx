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
  cursor: pointer;
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

export const SignupContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`

export const SignupBox = styled.div`
  display: flex;
  margin: 10px 0;

  label {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 20px;
    font-size: 15px;
  }

  input {
    width: 270px;
    height: 40px;
    font-size: 13px;
    padding-left: 5px;
    border: solid 0.5px #432d2d;
    border-radius: 5px;
  }
`

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  small {
    display: flex;
    justify-content: right;
    font-size: 10px;
    color: #d42708;
  }
`

export const PasswordInputBox = styled.div`
  display: flex;

  label {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-right: 20px;
    font-size: 15px;
  }

  input {
    margin: 0;
    width: 270px;
    height: 40px;
    font-size: 13px;
    padding-left: 5px;
    border: solid 0.5px #432d2d;
    border-radius: 5px;
  }
`

export const SignupRadioBox = styled.div`
  display: flex;
  margin: 10px 0;
`

export const RadioLabel = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: right;
  margin-right: 20px;
  font-size: 15px;
`

export const RadioBox = styled.div`
  width: 270px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SignupBtn = styled.button`
  width: 250px;
  height: 50px;
  font-size: 25px;
  background-color: #432d2d;
  color: #fff;
  border: solid 1px #432d2d;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #675050;
  }
`

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 330px;
  margin: 20px 0 15px;
`

export const TermsContent = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;
  border: solid 0.5px #7d6e6e;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  font-size: 12px;
  line-height: 1.5;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  
  label {
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 10px;
  }
`

export const TermsAlert = styled.small`
  color: #432d2d;
`