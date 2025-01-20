import React, { useState, useEffect } from 'react';
import { Body, NewLogo } from '../../components/Styled';
import MypageLogo from '../../assets/img/Logo_mypage.svg';
import api from './api'; // API 요청을 위한 모듈
import styled from 'styled-components'; // styled-components 임포트
import PieChart from './PieChart'; // 파이 차트 컴포넌트 임포트

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;   
  background: #E1C9A9C2;
  border-radius: 10px; 
  padding: 10px; 
  margin-top: 20px; 
  width: 300px;
  margin-top:80px;

  /*정보 텍스트 간격*/
  p {
    margin: 5px 0; 
  }
`;

const ReadingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E1C9A9C2;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  width: 300px;

  /*정보 텍스트 간격*/
  p {
    margin: 5px 0; 
  }
`;

const GenreRatioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const MonthlyReadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

function MyPage() {
  const [profile, setProfile] = useState(null); // 프로필 정보를 저장할 상태
  const [readingInfo, setReadingInfo] = useState(null); // 읽기 정보를 저장할 상태
  const [genreRatio, setGenreRatio] = useState(null); // 장르 비율 정보를 저장할 상태
  const [monthlyReading, setMonthlyReading] = useState([]); // 월별 읽기 정보를 저장할 상태
  const userid_pk = localStorage.getItem('setpk'); // setpk 가져오기

  // 프로필 조회 API 요청
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get(`/member/profile/${userid_pk}/`);
        if (response.status === 200) {
          setProfile(response.data.data);
          console.log("받은 프로필 데이터:", response.data.data);
        }
      } catch (error) {
        console.error("프로필 조회 요청 실패:", error);
      }
    };

    const fetchReadingInfo = async () => {
      try {
        const response = await api.get(`/member/howmanybooks/${userid_pk}/`);
        if (response.status === 200) {
          setReadingInfo(response.data.data);
          console.log("받은 읽기 정보:", response.data.data);
        }
      } catch (error) {
        console.error("읽기 정보 조회 요청 실패:", error);
      }
    };

    const fetchGenreRatio = async () => {
      try {
        const response = await api.get(`/member/genre_ratio/${userid_pk}/`);
        if (response.status === 200) {
          setGenreRatio(response.data.data);
          console.log("받은 장르 비율 정보:", response.data.data);
        }
      } catch (error) {
        console.error("장르 비율 조회 요청 실패:", error);
      }
    };

    const fetchMonthlyReading = async () => {
      try {
        const response = await api.get(`/bankbook/reading-count/monthly/${userid_pk}/`);
        if (response.status === 200) {
          setMonthlyReading(response.data); // 월별 읽기 정보 설정
          console.log("받은 월별 읽기 정보:", response.data);
        }
      } catch (error) {
        console.error("월별 읽기 정보 조회 요청 실패:", error);
      }
    };

    fetchProfile();
    fetchReadingInfo();
    fetchGenreRatio();
    fetchMonthlyReading(); // 월별 읽기 정보 요청 호출
  }, [userid_pk]);

  return (
    <>
      <NewLogo src={MypageLogo} />
      <Body>
        {profile ? (
          <div>
            <ProfileContainer>
              <h2>{profile.name}의 정보</h2>
              <p>성별: {profile.gender}</p>
              <p>나이: {profile.age}</p>
            </ProfileContainer>

            {readingInfo ? (
              <ReadingInfoContainer>
                <h2>읽기 정보</h2>
                <p>사용자 ID: {readingInfo.user_id}</p>
                <p>총 책 수: {readingInfo.bankbook_count}</p>

                    {/* 월별 읽기 정보 출력 */}
                    <MonthlyReadingContainer>
                      <h2>월별 읽기 정보</h2>
                      {monthlyReading.length > 0 ? (
                        monthlyReading.map((item) => (
                          <p key={item.month}>{item.month}월: {item.count} 권</p>
                        ))
                      ) : (
                        <p>월별 읽기 정보가 없습니다.</p>
                      )}
                    </MonthlyReadingContainer>

                    {genreRatio ? (
                  <GenreRatioContainer>
                    <h2>장르 비율</h2>
                    <PieChart genreRatio={genreRatio.genre_ratio} />
                    <div>
                      {Object.entries(genreRatio.genre_ratio).map(([genre, ratio]) => (
                        <p key={genre}>{genre}: {Math.round(ratio * readingInfo.bankbook_count)}권</p>
                      ))}
                    </div>
                  </GenreRatioContainer>
                ) : (
                  <p>장르 비율 정보가 없습니다.</p>
                )}
              </ReadingInfoContainer>
            ) : (
              <p>읽기 정보가 없습니다.</p>
            )}
          </div>
        ) : (
          <p>아직 준비중</p>
        )}
      </Body>
    </>
  );
}

export default MyPage;
