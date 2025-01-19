import React from 'react'
import { Body, NewLogo } from '../../components/Styled'
import NoticeLogo from '../../assets/img/Logo_Notice.svg'

function NoticePage() {
  return (
    <>
      <NewLogo src={NoticeLogo}/>
      <Body>
        아직 준비중
      </Body>
    </>
  )
}

export default NoticePage
