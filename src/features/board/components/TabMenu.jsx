import React, { useEffect, useState } from 'react'
import { TabBtn } from './BoardStyled'
import { useNavigate, useParams } from 'react-router-dom';

function TabMenu() {
  const params = useParams();
  const navigate = useNavigate();
  const [ activeTab, setActiveTab ] = useState("모임");

  //url 기반으로 확인
  useEffect(() => {
    if (params.type === "review") {
      setActiveTab("리뷰");
    } else if (params.type === "group") {
      setActiveTab("모임");
    }
  }, [params.type]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "모임") {
      navigate('/board/group');
    } else if (tab === "리뷰") {
      navigate('/board/review');
    }
  }

  return (
    <div>
      <TabBtn
      onClick={() => handleTabChange("모임")}
      style={{backgroundColor: activeTab ==="모임" ? "#d89336" : "#d9d9d9"}}
      >
        독서모임
      </TabBtn>
      <TabBtn
      onClick={() => handleTabChange("리뷰")}
      style={{backgroundColor: activeTab ==="리뷰" ? "#d89336" : "#d9d9d9"}}
      >
        리뷰
      </TabBtn>
    </div>
  )
}

export default TabMenu
