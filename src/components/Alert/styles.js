import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.palette.translucent};
  padding: 16px;
  height: 100%;
  justify-content: center;
`;

export const Card = styled.View`
  background-color: ${(props) => props.theme.palette.secondary};
`;

export const CardHeader = styled.View`
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardBody = styled.View`
  padding: 24px;
  padding-top: 0;
`;
