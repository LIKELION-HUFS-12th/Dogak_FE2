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
  width: 100%;
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