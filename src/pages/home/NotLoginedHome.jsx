import React from 'react'
import "../../index.css"
import { NewLogo } from '../../components/Styled'
import Logo from '../../assets/img/Logo_home.svg'

function NotLoginedHome() {
  return (
    <div id='app'>
      <NewLogo src={Logo}/>
      <div>
        <h3>인기있는 도서</h3>
      </div>
    </div>
  )
}

export default NotLoginedHome
