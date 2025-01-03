import React, {useState} from 'react'
import TabMenu from '../components/TabMenu';
import BoardList from '../components/BoardList';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const ListPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 412px;
`

function BoardListPage() {
  const [ activeTab, setActiveTab ] = useState("모임");

  return (
    <ListPageBox>
      <TabMenu activeTab={activeTab} onTabChange={setActiveTab}/>
      <SearchBar/>
      <BoardList tab={activeTab}/>
    </ListPageBox>
  )
}

export default BoardListPage
