import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import notice from '../assets/icon/notice-icon.svg'
import board from '../assets/icon/board-icon.svg'
import home from '../assets/icon/home-icon.svg'
import record from '../assets/icon/record-icon.svg'
import mypage from '../assets/icon/maypage-icon.svg'

//임시로 만들어만 봄봄
function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  //이게 맞는 방법인지는 잘...
  useEffect(() => {
    const path = location.pathname;
    if (path === '/board') {
      navigate('/board/group');
    }
  })

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
        <img src={mypage}/>
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
  max-width: inherit; /**부모 요소 크기 넘어가지 않게 */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  /* box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1); */
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #8e8e93;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  width: 65px;
  padding: 0.3rem;

  &.active {
    color: #D89336;
    background-color: #f0ebe4;
    font-size: 1rem;
  }

  img {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
  }
`;

