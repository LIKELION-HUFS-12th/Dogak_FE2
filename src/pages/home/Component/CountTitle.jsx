import React from 'react'

function CountTitle({post}) {
  const title = `${post.group_name}`
  const trucatedText = title.length > 16 ? title.slice(0, 14) + "..." : title

  return (
    <h5>
      {trucatedText}
    </h5>
  )
}

export default CountTitle
