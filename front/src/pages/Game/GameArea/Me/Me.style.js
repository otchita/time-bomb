import styled from 'styled-components';
import { getSpacing } from '../../../../helpers/stylesheet';

export const MeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eceff1;
  padding-top: ${getSpacing(6)};
  border-right: 4px solid #3f8756;
`;

export const PlayerName = styled.div`
  font-size: 22px;
  color: #263238;
  margin-bottom: ${getSpacing(4)};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 210px;
  margin-bottom: ${getSpacing(6)};

  & > * {
    margin-bottom: ${getSpacing(3)};
  }
`;
