import styled from 'styled-components';
import timeBombImg from '../../images/time-bomb.jpg';

export const LobbyContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${timeBombImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
