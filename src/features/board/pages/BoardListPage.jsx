import React, {useState} from 'react'
import TabMenu from '../components/TabMenu';
import BoardList from '../components/BoardList';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import { SmallBtn } from '../components/BoardStyled';

const ListPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 412px;
`

const ButtonBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`

function BoardListPage() {
  const [ activeTab, setActiveTab ] = useState("모임");

  return (
    <ListPageBox>
      <TabMenu activeTab={activeTab} onTabChange={setActiveTab}/>
      <SearchBar/>
      <BoardList tab={activeTab}/>
      <ButtonBox>
        <SmallBtn color='#d89336'>내 글 보기</SmallBtn>
        <SmallBtn>글쓰기</SmallBtn>
      </ButtonBox>
    </ListPageBox>
  )
}

export default BoardListPage
