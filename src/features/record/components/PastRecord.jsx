import styled from 'styled-components';

const Button = styled.button`
  width: 276px;
  height: 41px;
  margin-top: 300px;
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
  return (
    <Button>
      내가 새긴 기록 보러가기
    </Button>
  );
}

export default RecordButton;