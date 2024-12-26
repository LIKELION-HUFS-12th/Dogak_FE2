import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import notice from '../assets/icon/notice-icon.svg'
import board from '../assets/icon/board-icon.svg'
import home from '../assets/icon/home-icon.svg'
import record from '../assets/icon/record-icon.svg'
import account from '../assets/icon/maypage-icon.svg'

//임시로 만들어만 봄봄
function BottomNav() {
  return (
    <NavBar>
      <NavItem to="/notice" end>
        <img src={notice}/>
        <span>알림</span>
      </NavItem>
      <NavItem to="/board">
        <img src={board}/>
        <span>게시판</span>
      </NavItem>
      <NavItem to="/">
        <img src={home}/>
        <span>홈</span>
      </NavItem>
      <NavItem to="/record">
        <img src={record}/>
        <span>기록</span>
      </NavItem>
      <NavItem to="/mypage">
        <img src={account}/>
        <span>계정</span>
      </NavItem>
    </NavBar>
  )
}

export default BottomNav

const NavBar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #8e8e93;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;

  &.active {
    color: #000; /* 선택된 탭의 색상 */
  }

  img {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
`;

