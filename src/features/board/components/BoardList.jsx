import React, { useEffect, useState } from 'react'
import { Hr, LinkItem, ListBox, ListId, ListTitle, SingleList } from './BoardStyled';
import CountText from './CountText';
import { useParams } from 'react-router-dom';

function BoardList() {
  const { activeTab } = useParams();
  const [ posts, setPosts ] = useState([
    {
      "id" : 9,
      "user" : "dogak",
      "book_title" : "백설공주에게 죽음을",
      "group_name" : "파우누스 시리즈 같이 읽어요요",
      "meeting_type" : "온라인",
      "start_date" : "2024-12-01",
      "end_date" : "2024-12-31",
      "description" : "독일 추리 소설 좋아하는 사람 모여라",
      "meeting_days" : "월, 수, 금",
      "created_at" : "2024-12-25",
      "updated_at" : "2024-12-25",
      "participants" : []
    },
    {
      "id" : 9,
      "user" : "dogak",
      "book_title" : "죄와 벌",
      "group_name" : "나는야 특별해지고 싶은 사람",
      "meeting_type" : "온라인",
      "start_date" : "2024-12-01",
      "end_date" : "2024-12-31",
      "description" : "독일 추리 소설 좋아하는 사람 모여라",
      "meeting_days" : "월, 수, 금",
      "created_at" : "2024-12-25",
      "updated_at" : "2024-12-25",
      "participants" : []
    }
  ]);
  const [ loading, setLoading ] = useState(false)


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const endpoint = activeTab === "review" ? "/reviewboard" : "groupboard"; //url에 따라 api 결정
        const response = await fetch(endpoint) //api불러오기
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.errer("게시글 불러오는 중 오류:", error);
      } finally {
        setLoading(false); //로딩 종료
      }
    };

    fetchPosts();
  }, [activeTab])

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
