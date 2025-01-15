import React, { useEffect, useState } from 'react';
import { Hr, ListPageBox, TabBtn } from '../components/BoardStyled';
import { useLocation, useNavigate } from 'react-router-dom';
import BoardWriteG from '../components/BoardWriteG';

function BoardWritePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [ activeTab, setActiveTab ] = useState("모임")

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("group")) {
      setActiveTab("모임");
    } else if (path.includes("review")) {
      setActiveTab("리뷰");
    }
  }, [location.pathname])

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "모임") {
      navigate("/board/group/write");
    } else if (tab === "리뷰") {
      navigate("/board/review/write");
    }
  };

  return (
    <ListPageBox>
      <div>
        <TabBtn onClick={() => handleTabChange("모임")}
        style={{backgroundColor: activeTab ==="모임" ? "#d89336" : "#d9d9d9"}}>모임 글쓰기</TabBtn>
        <TabBtn onClick={() => handleTabChange("리뷰")}
        style={{backgroundColor: activeTab ==="리뷰" ? "#d89336" : "#d9d9d9"}}>리뷰 글쓰기</TabBtn>
      </div>
      <Hr/>
      <BoardWriteG/>
    </ListPageBox>
  )
}

export default BoardWritePage