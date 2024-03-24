import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px; //for Col padding
`;

export const Col = styled.div`
  padding: 10px;
  ${({ width }) => width && `width: ${width};`}
`;
