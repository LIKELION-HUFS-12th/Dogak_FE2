import { Link } from "react-router-dom";
import styled from "styled-components";

export const TabBtn = styled.button`
  flex: 1;
  width: 100px;
  padding: 0.5rem;
  margin: 1px;
  cursor: pointer;
  border: 1px solid #d89336;
  border-radius: 5px;
`

export const ListBox = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SingleList = styled.li`
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 32px;
  border-bottom: 1px solid #432d2d;

  span {
    display: flex;
    justify-content: center;
    width: 45px;
  }
`
export const ListId = styled.div`
  width: 12px;
`

export const ListTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
`

export const StyledSearchBar = styled.input`
  width: 265px;
  height: 28px;
  margin: 35px 0 10px;
  border-radius: 5px;
  border: 0.5px solid #515151;
  background-color: #e8e4de;
  text-align: center;

  ::placeholder {
    text-align: center;
    color: #515151;
    font-size: 12px;
  }
`

export const LinkItem = styled(Link)`
  cursor: pointer;
  color: #000;
  text-decoration: none;
  :hover {
    color: #e76300;
  }
`

export const Hr = styled.hr`
  width: 90%;
  margin: 15px 0 0;
  padding: 0;
  border: 0.1px solid #432d2d;
`

export const SmallBtn = styled.button`
  font-size: 11px;
  padding: 8px 12px;
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.bgcolor || "#432d2d"};
  border: none;
  border-radius: 5px;
`

export const ListPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 412px;
`

export const PostContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.5px #bdbdbd;
  padding-bottom: 10px;
`

export const PostTitle = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 8px;

  h3 {
    font-size: 16px;
    margin: 0;
  }
  
  div {
    display: flex;
    width: 100px;
    justify-content: space-between;
  }
`
export const PostInfoBox = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  font-size: 12px;
`

export const PostBodyBox = styled.div`
  display: flex;
  width: 95%;
  margin: 25px;
  flex-direction: column;
  font-size: 14px;
;
`

export const PostSpoilerBtn = styled.div`
  cursor: pointer;
  margin: 20px 0;
  color: #e76300;

  &:hover {
    color: #e5a34d;
  }
`
export const PostBtnBox = styled.div`
  width: 95%;
`

export const WriteBtn = styled.button`
  width: 90px;
  height: 40px;
  font-size: 15px;
  margin: 15px;
  background-color: ${(props) => props.bgcolor || "#A3C2DC"};
  border: none;
  border-radius: 5px;
`

export const WriteBox = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 10px 0;

  h4 {
    display: flex;
    margin: 5px 0;
    width: 50px;
    font-size: 13px;
    justify-content: right;
  }
  
  input {
    width: 290px;
  }
`
export const RadioBox = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  h4 {
    display: flex;
    margin: 5px 0;
    width: 50px;
    font-size: 13px;
    justify-content: right;
  }
`
export const RadioBtnBox = styled.div`
  display: flex;
  width: 290px;
  font-size: 12px;

  label {
    width: 70px;
    display: flex;
    align-items: center;
  }
  input {
    margin: 5px 5px 5px 0;
  }
`

export const BoardWriteBox = styled.div`
  display: flex;
  width: 90%;
  margin: 20px 0;
  textarea {
    resize: none;
    padding: 5px;
  }
  
`