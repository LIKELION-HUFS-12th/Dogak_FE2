import React from 'react';
import { ButtonContainer, KeyBoxR, KeyBoxL, LoginButton, ThickLogo, SignupLinkBox, SignupLink, MainLinkBox } from '../../components/Styled';
import Logo from '../../assets/img/Logo_Onboarding.svg';
import "../../index.css";
import arrow from '../../assets/icon/icons8-arrow-48.png'
import { useNavigate } from 'react-router-dom';


function OnboardingPage() {
  const navigate = useNavigate();

  const handleLonginBtn = () => {
    navigate('/login')
  }
  return (
    <div id='app'>
      <ThickLogo src={Logo} />
      <div>
        <ButtonContainer>
          <KeyBoxL></KeyBoxL>
          <LoginButton onClick={handleLonginBtn}>로그인</LoginButton>
          <KeyBoxR></KeyBoxR>
        </ButtonContainer>
        <SignupLinkBox>
          <SignupLink to={'/signup'}>회원가입</SignupLink>
        </SignupLinkBox>
      </div>
      <MainLinkBox to={'/welcome/home'}>
        <div>로그인/회원가입 없이 둘러보기</div>
        <img src={arrow}/>
      </MainLinkBox>
    </div>
  )
}

export default OnboardingPage
