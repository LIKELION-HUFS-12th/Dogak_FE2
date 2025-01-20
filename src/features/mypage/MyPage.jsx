import React from 'react'
import { Body, NewLogo } from '../../components/Styled'
import MypageLogo from '../../assets/img/Logo_mypage.svg'

function MyPage() {
  return (
    <>
      <NewLogo src={MypageLogo} />
      <Body>
        아직 준비중
      </Body>
    </>
  )
}

export default MyPage
