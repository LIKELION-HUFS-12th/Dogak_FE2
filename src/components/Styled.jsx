import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.img`
  padding-top: 30px;
  padding-bottom: 10px;
  height: 130px;
  top: 0;
  position: fixed;
  z-index: 100;
  background-color: #f0ebe4;
`

export const ThinLogo = styled.img`
  padding-top: 60px;
  padding-bottom: 30px;
  height: 60px;
  top: 0;
  position: fixed;
  z-index: 100;
  background-color: #f0ebe4;
`

export const ThickLogo = styled.img`
  padding-top: 80px;
  padding-bottom: 9px;
  height: 308px;
  top: 0;
  background-color: #f0ebe4;
`

export const Body = styled.div`
  margin-top: 170px;
  margin-bottom: 100px;
`

export const ButtonContainer = styled.div`
  margin: 0;
  width: 412px;
  display: flex;
  justify-content: space-between;
`

export const KeyBoxL = styled.div`
  width: 37px;
  height: 60px;
  background-color: #e8e4de;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`

export const KeyBoxR = styled.div`
  width: 37px;
  height: 60px;
  background-color: #e8e4de;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const LoginButton = styled.button`
  width: 325px;
  height: 60px;
  background-color: #e8e4de;
  font-size: 35px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #432d2ddc;
    color: #fff;
    transition: 0.3s;
  }
`

export const SignupLinkBox = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  font-size: 30px;
`

export const SignupLink = styled(Link)`
  color: #95928d;
  cursor: pointer;
  text-decoration: none;
`

export const MainLinkBox = styled(Link)`
  display: flex;
  align-items: center;
  width: 95%;
  justify-content: center;
  font-size: 20px;
  position: fixed;
  bottom: 25px;
  cursor: pointer;
  text-decoration: none;
  color: #95928d;
  
  img {
    margin-left: 20px;
  }
`