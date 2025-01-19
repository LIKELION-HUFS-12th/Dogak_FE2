import React from 'react';
import { ButtonContainer, KeyBoxR, KeyBoxL, LoginButton, ThickLogo, SignupLinkBox, SignupLink } from '../../components/Styled';
import Logo from '../../assets/img/Logo_Onboarding.svg';
import "../../index.css";


function OnboardingPage() {
  return (
    <div id='app'>
      <ThickLogo src={Logo} />
      <div>
        <ButtonContainer>
          <KeyBoxL></KeyBoxL>
          <LoginButton>로그인</LoginButton>
          <KeyBoxR></KeyBoxR>
        </ButtonContainer>
        <SignupLinkBox>
          <SignupLink to={'/signup'}>회원가입</SignupLink>
        </SignupLinkBox>
      </div>
    </div>
  )
}

export default OnboardingPage
