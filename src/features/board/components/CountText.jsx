import React from 'react'
import { ListTitle } from './BoardStyled'

function CountText({post}) {
  const combinedText = `[${post.book_title}]${post.group_name}`;

  const truncatedText =
    combinedText.length > 20 ? combinedText.slice(0,20) + "..." : combinedText

  return (
    <ListTitle>
      <h3>{truncatedText}</h3>
    </ListTitle>
  )
}

export default CountText
