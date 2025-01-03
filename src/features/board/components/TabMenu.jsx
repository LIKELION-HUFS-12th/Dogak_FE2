import React, {useState} from 'react'
import { TabBtn } from './BoardStyled'
import { useNavigate } from 'react-router-dom';

function TabMenu() {
  const navigate = useNavigate();
  const [ activeTab, setActiveTab ] = useState("모임");

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
      style={{backgroundColor: activeTab ==="모임" ? "#d89336" : "#d9d9d9"}}
      onClick={() => handleTabChange("모임")}
      >
        독서모임
      </TabBtn>
      <TabBtn
      style={{backgroundColor: activeTab ==="리뷰" ? "#d89336" : "#d9d9d9"}}
      onClick={() => handleTabChange("리뷰")}
      >
        리뷰
      </TabBtn>
    </div>
  )
}

export default TabMenu
