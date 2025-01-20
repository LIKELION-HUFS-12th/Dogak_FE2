import React, { useEffect, useState } from 'react'
import { Hr, LinkItem, ListBox, ListId, ListTitle, SingleList } from './BoardStyled';
import CountText from './CountText';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dogakdogak.store',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json'},
  withCredentials: true
});

function BoardList() {
  const params = useParams();
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false)


{/**
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        // const endpoint = activeTab === "review" ? "/reviewboard/" : "groupboard/"; //url에 따라 api 결정
        // const response = await api.get(endpoint) //api불러오기
        const response = await api.get('/groupboard/');
        console.log('응답완료', response.data);
        // setPosts(response.data);
      } catch (error) {
        console.error("게시글 불러오는 중 오류:", error);
      } finally {
        setLoading(false); //로딩 종료
      }
    };

    getPosts();
  }, [activeTab])
*/}

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    const getData = async () => {
      try {
        if (params.type === 'review') {
          setPosts([
            {
              "id" : 2,
              "user" : "dogak",
              "book_title" : "데미안",
              "group_name" : "이거 원래 이럼?;;",
              "meeting_type" : "주의",
            },
            {
              "id" : 3,
              "user" : "영가이",
              "book_title" : "날개",
              "group_name" : "진짜 초현실주의의 선구자라더니 현대 미술처럼 이해하기 어려운 소설",
              "meeting_type" : "주의",
            },
            {
              "id" : 4,
              "user" : "멋사",
              "book_title" : "사피엔스",
              "group_name" : "유명한 과학 책이라서 어려울 줄 알았는데 재미있음",
              "meeting_type" : "주의",
            }
          ]);
        } else if (params.type === 'group') {
          setPosts([
            {
              "id" : 1,
              "user" : "dogak",
              "book_title" : "백설공주에게 죽음을",
              "group_name" : "파우누스 시리즈 같이 읽어요",
              "meeting_type" : "온라인",
            },
            {
              "id" : 9,
              "user" : "dogak",
              "book_title" : "죄와 벌",
              "group_name" : "나는야 특별해지고 싶은 사람",
              "meeting_type" : "온라인",
            }
          ]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [params.type])

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <ListBox>
        <Hr/>
        <SingleList>
          <ListId></ListId>
            <ListTitle>
              <h3>[책 이름]</h3>
              <h3>모임명</h3>
            </ListTitle>
            <span>아이디</span>
            <span>모임유형</span>
        </SingleList>
        {posts.map((post) => (
          <SingleList key={post.id}>
            <ListId>{post.id}</ListId>
            <LinkItem to={`detail/${post.id}`}>
              <CountText post={post}/>
            </LinkItem>
            <span>{post.user}</span>
            <span>{post.meeting_type}</span>
          </SingleList>
        ))}
      </ListBox>
    </>
  )
}

export default BoardList
