import styled from 'styled-components';
import { getSpacing } from '../../../../helpers/stylesheet';
import timeBombImg from '../../../../images/time-bomb.jpg';

export const BackgroundImage = styled.div`
  flex: 4;
  background-image: url(${timeBombImg});
  background-size: cover;
  background-position: center;
`;

export const OtherPlayersAndBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 32px);
  padding: ${getSpacing(4)};
  background-color: rgba(255, 255, 255, 0.9);
`;

export const OtherPlayersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border-bottom: 4px solid #3f8756;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - ${getSpacing(4)});
  margin-right: ${getSpacing(4)};
  margin-bottom: ${getSpacing(8)};
`;

export const PlayerName = styled.div`
  font-size: 22px;
  margin-bottom: ${getSpacing(2)};
`;

export const PlayerCards = styled.div`
  display: flex;
  justify-content: space-between;

  & :not(:last-child) {
    margin-right: ${getSpacing(3)};
  }
`;
