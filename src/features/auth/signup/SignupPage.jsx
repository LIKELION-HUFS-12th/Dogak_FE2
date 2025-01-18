import React from 'react'
import { Body, ThinLogo } from '../../../components/Styled'
import SignupLogo from '../../../assets/img/signup_logo.svg'
import Signup from './Signup'

function SignupPage() {
  return (
    <>
      <ThinLogo src={SignupLogo}/>
      <Body>
        <Signup/>
      </Body>
    </>
  )
}

export default SignupPage
