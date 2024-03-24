import styled from 'styled-components';

export const Row = styled.div<{ justify?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify || 'left'};
  align-items: center;
`;

export const VerticalRow = styled.div<{ justify?: string }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Col = styled.div<{ align?: string; width?: string }>`
  text-align: ${({ align }) => align || 'left'};
  width: ${({ width }) => width || '100%'};
`;

export const Gap = styled.div<{ padding?: string }>`
  padding: ${({ padding }) => padding || '10px'};
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Card = styled.div<{ height?: string }>`
  background-color: #ffffff;
  width: 80%;
  height: ${({ height }) => height || 'auto'};
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
