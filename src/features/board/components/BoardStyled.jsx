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
  margin: 0;
  padding: 0;
  border: 0.1px solid #432d2d;
`

export const SmallBtn = styled.button`
  font-size: 11px;
  padding: 8px 15px;
  color: #fff;
  background-color: ${(props) => props.color || "#432d2d"};
  border: none;
  border-radius: 5px;
`