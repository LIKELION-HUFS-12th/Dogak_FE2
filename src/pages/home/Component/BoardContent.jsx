import React, { useEffect, useState } from 'react'
import { BoardContainer, SingleBoardBox } from './HomeStyled'
import axios from 'axios';
import CountTitle from './CountTitle';

const api = axios.create({
  baseURL: 'https://dogakdogak.store',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

function BoardContent() {
  const [ posts, setPosts ] = useState([
    {
      "id" : 1,
			"user" : '한채채',
      "book_title" : '지리의 힘',
			"group_name" : '지리에 진심인 사람',
			"meeting_type" : 'online',
			"start_date" : '2025-01-11',
			"end_date" : '2025-01-31',
			"description" : '같이 읽어요~',
			"meeting_days" : '월, 수',
			"created_at" : '2025-01-03',
			"updated_at" : '2025-01-05',
			"participants" : []
    },
    {
      "id" : 1,
			"user" : 'GY',
      "book_title" : '쉽게 배우는 프로그래밍',
			"group_name" : '코딩책 같이 읽으며 공부하실분',
			"meeting_type" : 'online',
			"start_date" : '2025-01-11',
			"end_date" : '2025-01-31',
			"description" : '같이 읽어요~',
			"meeting_days" : '월, 수',
			"created_at" : '2024-12-28',
			"updated_at" : '2025-01-02',
			"participants" : []
    }
  ]);

  useEffect(() => {
    const getPosts = async () => {
      const token = localStorage.getItem('access');
      console.log('토큰',token)
      try {
        const response = await api.get('/groupboard/', {
          headers: {
              Authorization: `${token}`
            }
          });
        // setPosts(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('게시판 불러오는 중 오류:', error)
      }
    }

    getPosts();
  }, [])

  return (
    <BoardContainer>
      {posts.map((post) => (
        <>
        <SingleBoardBox key={post.id}>
          <div style={{width: '12px'}}>{post.id}</div>
          <div style={{width: '65px'}}>{post.updated_at}</div>
          <CountTitle post={post}/>
          <div style={{width: '45px'}}>{post.user}</div>
        </SingleBoardBox>
        <hr/>
        </>
      ))}
      <button>더 보러가기</button>
    </BoardContainer>
  )
}

export default BoardContent
