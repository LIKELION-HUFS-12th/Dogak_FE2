import React from 'react'
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

  return (
    <ListPageBox>
      <TabMenu/>
      <SearchBar/>
      <BoardList/>
    </ListPageBox>
  )
}

export default BoardListPage
