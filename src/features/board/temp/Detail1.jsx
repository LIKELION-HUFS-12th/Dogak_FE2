import React from 'react'
import { Hr, ListPageBox } from '../components/BoardStyled'
import TabMenu from '../components/TabMenu'
import BoardDetailBox from './BoardDetailBox1'

function Detail1() {
  return (
    <ListPageBox>
      <TabMenu/>
      <Hr/>
      <BoardDetailBox/>
    </ListPageBox>
  )
}

export default Detail1
