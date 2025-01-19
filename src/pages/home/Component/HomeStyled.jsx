import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 250px;
  margin-bottom: 30px;

  h3 {
    font-size: 20px;
    margin-top: 20px;
  }
`

export const ReviewContentBox = styled.div`
  width: 310px;
  height: auto;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

export const ReviewTitleBox = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin: 15px 0 8px;

  h4 {
    font-size: 15px;
    padding: 0;
    margin: 0;
  }
`

export const BookStateBtn = styled.button`
  width: 52px;
  height: 20px;
  font-size: 10px;
  border-radius: 10px;
  border: none;
  background-color: #a3c2dc;
  align-items: center;
`

export const ReviewDateBox = styled.div`
  font-size: 8px;
`

export const ReviewInfoBox = styled.div`
  width: 280px;
  height: auto;
  display: flex;
  font-size: 12px;
  margin: 15px 0;

  img {
    width: 110px;
    height: auto;
    background-color: #fff;
  }
`
export const ReviewTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  padding: 5px;
  background-color: #b1b1b1;

  h5 {
    margin: 5px 0 0;
    font-size: 12px;
  }

  hr {
    margin: 0;
    color: #000;
    width: 100px;
  }
`

export const ReviewBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;

  button {
    width: 40px;
    height: 20px;
    font-size: 9px;
    background-color: #a3c2dc;
    border: solid #432d2d 0.3px;
    border-radius: 3px;
  }
`

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  width: 320px;
  background-color: #ece3d7;
  margin-bottom: 35px;

  hr {
    width: 100%;
    color: #d9d9d9;
    margin: 5px;
  }

  button {
    font-size: 12px;
    background-color: #d89336;
    border: solid #d89336 1px;
    border-radius: 5px;

    &:hover {
      background-color: #ffc272;
    }
  }
`

export const SingleBoardBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: space-between;

  h5 {
    width: 140px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 12px;

    &:hover {
      color: #e76300
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const BooksContainer = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;

  img {
    width: auto;
    height: 230px;
  }
`