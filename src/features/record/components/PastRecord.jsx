import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
  width: 276px;
  height: 41px;
  margin-top: 20px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #A3C2DC;
  border: none; 
  color: black;
  font-size: 16px; 
  cursor: pointer; 
  &:hover {
    background: #8FA8C3;
`;

function RecordButton() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClick = () => {
    navigate('/record/pastreview'); // 버튼 클릭 시 경로 변경
  };

  return (
    <Button onClick={handleClick}>
      내가 새긴 기록 보러가기
    </Button>
  );
}

export default RecordButton;