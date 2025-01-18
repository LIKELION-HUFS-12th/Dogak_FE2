import React, { useState } from 'react'
import { CheckboxContainer, TermsContainer, TermsContent } from '../AuthStyled';

function SignupTerms({onAgree}) {
  const [isChecked, setIsChecked ] = useState(false);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onAgree(checked);
  };

  return (
    <TermsContainer>
      <CheckboxContainer>
        <input
          type='checkbox'
          id='agree'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label>아래 내용에 모두 동의합니다.</label>
      </CheckboxContainer>
      <TermsContent>
        {/*약관 내용*/}
        <h5>도각도각 이용 약관</h5>
        <p>제 1조 목적</p>
        <p>본 이용약관은 "도각도각"(이하 '회사') 서비스의 이용조건과 운영에 관한 제반사항 및 기타 필요한 사항 규정을 목적으로 합니다.</p>
        <p>제 2조 용어의 정의</p>
        <p>이 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.
          <br/>
          1. '서비스'라 함은 구현되는 단말기(PC, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 '이용자'가 이용할 수 있는 회사가 제공하는 제반 서비스를 의미합니다.
          <br/>
          2. '이용자'라 함은 '서비스'에 접속하여 어쩌구 저쩌구 아직은 사이트의 어떠한 약관도 정리되지 않았습니다.
        </p>
        <p>제 3조 약관의 효력과 변경</p>
        <p>그런게 있을리가...</p>
        <p>기타 등등...</p>
      </TermsContent>
    </TermsContainer>
  )
}

export default SignupTerms
