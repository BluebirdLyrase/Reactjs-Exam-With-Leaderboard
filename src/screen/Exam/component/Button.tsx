import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { UseFormReturn } from 'react-hook-form';
import { useUserStore } from '../../../store/useUserStore';
import { useLeaderBoard } from '../../../store/useLeaderBoard';
import { examListType } from '../context/hook/useExam';

export const ButtonStyle = css`
  padding: 10px 20px;
  border: none;
  text-align: center;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const NextButtonStyle = styled.button`
  ${ButtonStyle}
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#11675b')};
`;

const BackButtonStyle = styled.button`
  ${ButtonStyle}
  background-color: #34495E;
`;

const ExitButtonStyle = styled.button`
  ${ButtonStyle}
  background-color: #C0392B;
`;

const FinishButtonStyle = styled.button`
  ${ButtonStyle}
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#2ECC71')};
`;

export const NextButton: React.FC<{
  toNext: () => void;
  form: UseFormReturn;
  currentName: string;
}> = ({ toNext, form, currentName }) => {
  const value = form.watch(currentName);
  return (
    <NextButtonStyle disabled={!value} onClick={toNext} id={'next-button'}>
      Next
    </NextButtonStyle>
  );
};

export const BackButton: React.FC<{
  toBack: () => void;
}> = ({ toBack }) => {
  return <BackButtonStyle onClick={toBack}>Back</BackButtonStyle>;
};

export const ExistButton: React.FC = () => {
  const navigate = useNavigate();

  return <ExitButtonStyle onClick={() => navigate('/')}>Exit</ExitButtonStyle>;
};

export const FinishButton: React.FC<{
  form: UseFormReturn;
  currentName: string;
  examList: examListType;
}> = ({ form, currentName, examList }) => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const onFinish = useLeaderBoard((state) => state.onFinish);
  const value = form.watch(currentName);
  return (
    <FinishButtonStyle
      disabled={!value}
      onClick={form.handleSubmit((value) => {
        onFinish(user, examList, value);
        navigate('/leader-board');
      })}
      id={'finish-button'}
    >
      Finish
    </FinishButtonStyle>
  );
};
