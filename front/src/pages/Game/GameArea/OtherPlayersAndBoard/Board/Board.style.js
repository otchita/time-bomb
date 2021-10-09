import styled from 'styled-components';
import { getSpacing } from '../../../../../helpers/stylesheet';

export const BoardContainer = styled.div`
  padding-top: ${getSpacing(4)};
  display: flex;
  flex-direction: column;
`;

export const GameInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GameInfoLeft = styled.div``;
export const GameInfoRight = styled.div``;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  & > :not(:last-child) {
    margin-right: ${getSpacing(12)};
  }
`;
