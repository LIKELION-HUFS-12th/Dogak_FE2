import React from 'react'
import { Hr, ListPageBox } from '../components/BoardStyled'
import TabMenu from '../components/TabMenu'
import BoardDetailBox from '../components/BoardDetailBox'

function BoardDetailPage() {
  return (
    <ListPageBox>
      <TabMenu />
      <Hr/>
      <BoardDetailBox/>
      <Hr/>
    </ListPageBox>
  )
}

export default BoardDetailPage
