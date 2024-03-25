import React from 'react';
import styled from 'styled-components';
import { useController, useFormContext } from 'react-hook-form';

const StyledInput = styled.input`
  text-align: center;
  padding: 10px 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

type InputProps = {
  placeholder?: string;
  name: string;
};

export const InputText: React.FC<InputProps> = ({ placeholder, name }) => {
  const useFormMethod = useFormContext();
  if (!useFormMethod) throw new Error(`InputText must be warp by FormProvider`);
  if (!name) throw new Error(`must provide name for InputText`);

  const { control } = useFormMethod;

  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <StyledInput
      id='username-input'
      type='text'
      placeholder={placeholder}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      inputRef={field.ref}
    />
  );
};
