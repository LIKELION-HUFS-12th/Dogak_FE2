import React from 'react'
import styled from 'styled-components'
import BoardLogo from '../../assets/img/Logo_Board.svg'
import { Body, Logo } from '../../components/Styled'
import { Outlet } from 'react-router-dom'

function BoardPage() {
  return (
    <>
      <Logo src={BoardLogo}/>
      <Body>
        <Outlet />
      </Body>
    </>
  )
}

export default BoardPage
