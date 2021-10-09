import axios from 'axios';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { GameAreaContainer } from './GameArea.style';
import Me from './Me/Me';
import OtherPlayersAndBoard from './OtherPlayersAndBoard/OtherPlayersAndBoard';

const GameArea = ({
  gameState,
  gameId,
  otherPlayers,
  role,
  cards,
  userInfo,
}) => {
  const myTurn = userInfo.name === gameState.pincher;

  const [, pinchCard] = useAsyncFn(async (targetName, cardId) => {
    await axios.post(
      `http://localhost:5000/api/games/${gameId}/players/${userInfo.id}/pinch`,
      {
        targetName,
        cardId,
      }
    );
  });

  return (
    <GameAreaContainer>
      <Me playerName={userInfo.name} role={role} cards={cards} />
      <OtherPlayersAndBoard
        gameState={gameState}
        otherPlayers={otherPlayers}
        myTurn={myTurn}
        pinchCard={pinchCard}
      />

      {/* <PlayersTop
        gameState={gameState}
        players={playersTop}
        myTurn={myTurn}
        pinchCard={pinchCard}
      ></PlayersTop>
      <SidePlayersAndBoard>
        <SidePlayers
          gameState={gameState}
          players={playersLeft}
          myTurn={myTurn}
          pinchCard={pinchCard}
        />
        <Board gameState={gameState} />
        <SidePlayers
          gameState={gameState}
          players={playersRight}
          myTurn={myTurn}
          pinchCard={pinchCard}
        />
      </SidePlayersAndBoard>
      <Me gameState={gameState} role={role} cards={cards} /> */}
    </GameAreaContainer>
  );
};

export default GameArea;
