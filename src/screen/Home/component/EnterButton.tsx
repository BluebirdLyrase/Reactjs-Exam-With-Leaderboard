import styled from 'styled-components';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/useUserStore';

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

type ButtonProps = {
  form: UseFormReturn;
};

export const EnterButton: React.FC<ButtonProps> = ({ form }) => {
  const login = useUserStore((state) => state.setUser);
  const username = form.watch(`username`);
  const navigate = useNavigate();

  return (
    <Button
      id='enter-btn'
      disabled={!username}
      onClick={form.handleSubmit((value) => {
        login(value.name);
        return navigate(`exam`);
      })}
    >
      Enter
    </Button>
  );
};
