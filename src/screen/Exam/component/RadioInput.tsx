import { useController } from 'react-hook-form';
import styled from 'styled-components';
import { useExamContext } from '../context/ExamContext';

export const RadioButton: React.FC<{ value: string; name: string }> = ({
  value,
  name,
}) => {
  const { form } = useExamContext();
  const { control, watch } = form;
  const currentValue = watch(name);
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <RadioStyle
      checked={`${currentValue}` === `${value}`}
      className={`value-${value}`}
      type='radio'
      onChange={(e: { target: { value: string } }) =>
        field.onChange(e.target.value)
      }
      onBlur={field.onBlur}
      value={value}
      name={field.name}
      inputRef={field.ref}
    />
  );
};

const RadioStyle = styled.input`
  width: 24px;
  height: 24px;
`;
