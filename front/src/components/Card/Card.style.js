import styled from 'styled-components';

export const Card = styled.img`
  width: 90px;
  ${({ myTurn }) => myTurn && 'cursor: pointer;'};
  object-fit: contain;
  box-shadow: 4px 4px 10px #9e9e9e;
  border-radius: 12px;
`;
