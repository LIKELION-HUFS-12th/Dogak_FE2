import React from 'react'
import TabMenu from '../components/TabMenu';
import BoardList from '../components/BoardList';
import styled from 'styled-components';

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
      <BoardList/>
    </ListPageBox>
  )
}

export default BoardListPage
