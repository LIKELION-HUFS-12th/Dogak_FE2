import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BooksContainer } from './HomeStyled';
import { useNavigate } from 'react-router-dom';
// import { XMLParser } from "fast-xml-parser";

function BooksContent() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ books, setBooks ] = useState([
      {
        bookDtlUrl: " https://data4library.kr/bookV?seq=1902173",
        bookImageURL: "http://image.aladin.co.kr/product/15848/6/cover/k622533431_1.jpg"
      },
      {
        bookDtlUrl: " https://data4library.kr/bookV?seq=2271872",
        bookImageURL: "http://image.aladin.co.kr/product/272/78/cover/8936433679_2.jpg"
      },
      {
        bookDtlUrl: " https://data4library.kr/bookV?seq=1153285",
        bookImageURL: "http://image.aladin.co.kr/product/14712/55/cover/k202532053_1.jpg"
      },
      {
        bookDtlUrl: " https://data4library.kr/bookV?seq=2155671",
        bookImageURL: "https://bookthumb-phinf.pstatic.net/cover/033/094/03309417.jpg?type=m1&udate=20180609"
      },
      {
        bookDtlUrl: " https://data4library.kr/bookV?seq=2435248",
        bookImageURL: "http://image.aladin.co.kr/product/29/99/cover/8973374117_1.jpg"
      },
      {
        bookDtlUrl: " https://data4library.kr/bookV?seq=331163",
        bookImageURL: "https://bookthumb-phinf.pstatic.net/cover/013/434/01343405.jpg?type=m1&udate=20071117"
      },
    ]);
  
    {/*useEffect(() => {
      const getBooks = async () => {
        try {
          const response = await axios.get('https://data4library.kr/api/loanItemSrch?authKey=f064f1d6c92829ce038c7d3083f7456ea79ba7fce353fcd9801444493174018e&pageSize=10', {
            headers: { Accept: "application/xml" },
          });
          const xmlData = response.data
          
          //json형식으로 변환
          const parser = new XMLParser();
          const jsonData = parser.parse(xmlData);

          setBooks(jsonData.response.docs.doc)
          
        } catch (error) {
          console.error("도서 목록을 불러오는 중 오류", error)
        }
      }
  
      getBooks();
    }, [])*/}

    useEffect(() => {
      const interval = setInterval(() => {
        //2초마다 업데이트
        setCurrentIndex((prevIndex) => (prevIndex + 2) % books.length);
      }, 8000);

      return () => clearInterval(interval);
    },[books])

    const currentBooks = books.slice(currentIndex, currentIndex + 2);

  return (
    <BooksContainer>
      {currentBooks.map((book, index) => (
        <div key={index}>
          <a
            href={book.bookDtlUrl}
            target='_blank'>
            <img
              src={book.bookImageURL}
              // alt={book.bookname}
            />
          </a>
        </div>
      ))}
    </BooksContainer>
  )
}

export default BooksContent