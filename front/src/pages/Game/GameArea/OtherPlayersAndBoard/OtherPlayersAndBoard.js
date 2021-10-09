import React from 'react';
import { Card } from '../../../../components/Card/Card.style';
import hiddenCard from '../../../../images/hiddenCard.jpg';
import Board from './Board/Board';
import {
  BackgroundImage,
  OtherPlayersAndBoardContainer,
  OtherPlayersContainer,
  PlayerCards,
  PlayerContainer,
  PlayerName,
} from './OtherPlayersAndBoard.style';

const OtherPlayersAndBoard = ({
  gameState,
  otherPlayers,
  myTurn,
  pinchCard,
}) => (
  <BackgroundImage>
    <OtherPlayersAndBoardContainer>
      <OtherPlayersContainer>
        {otherPlayers.map(player => (
          <PlayerContainer key={player}>
            <PlayerName>{player}</PlayerName>
            <PlayerCards>
              {new Array(gameState.playerCards[player])
                .fill(0)
                .map((_, index) => (
                  <Card
                    src={hiddenCard}
                    myTurn={myTurn}
                    onClick={() => {
                      if (myTurn) {
                        pinchCard(player, index);
                      }
                    }}
                    alt="hiddenCard"
                    key={index}
                  />
                ))}
            </PlayerCards>
          </PlayerContainer>
        ))}
      </OtherPlayersContainer>
      <Board gameState={gameState} />
    </OtherPlayersAndBoardContainer>
  </BackgroundImage>
);

export default OtherPlayersAndBoard;
