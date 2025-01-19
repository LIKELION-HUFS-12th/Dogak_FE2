import React from 'react'
import { Body, NewLogo } from '../../components/Styled'
import HomeLogo from '../../assets/img/Logo_home.svg'
import LoginedHome from './Component/LoginedHome'

function HomePage() {
  return (
    <>
      <NewLogo src={HomeLogo}/>
      <Body>
        <LoginedHome />
      </Body>
    </>
  )
}

export default HomePage
