import styled from 'styled-components';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Gap } from '../../../style';
import { Divider } from '../../Exam/component/Divider';

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#000000')};
`;

export const RetryButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Gap />
      <Divider />
      <Gap />
      <Button onClick={() => navigate('/')} id='again-btn'>
        Try Again
      </Button>
    </>
  );
};
