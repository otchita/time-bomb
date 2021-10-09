import React from 'react';
import { Card } from '../../../../../components/Card/Card.style';
import defuse from '../../../../../images/defuse.jpg';
import {
  BoardContainer,
  Cards,
  GameInfo,
  GameInfoLeft,
  GameInfoRight,
} from './Board.style';

const Board = ({ gameState }) => {
  const stepsLeft = gameState.numberOfPlayers - gameState.step + 1;
  return (
    <BoardContainer>
      <GameInfo>
        <GameInfoLeft>
          <div>C&apos;est au tour de {gameState.pincher}</div>
          <div>
            {`${gameState.numberOfPlayers - gameState.step + 1} tour${
              stepsLeft > 1 ? 's' : ''
            } restant`}
          </div>
        </GameInfoLeft>
        <GameInfoRight>
          <div>Manche : {gameState.phase}</div>
          <div>Tour : {gameState.step}</div>
        </GameInfoRight>
      </GameInfo>
      <Cards>
        {gameState.board.defuse > 0
          ? new Array(gameState.board.defuse)
              .fill(0)
              .map((_, index) => <Card src={defuse} alt="defuse" key={index} />)
          : 'Pas de câble trouvé pour le moment'}
      </Cards>
    </BoardContainer>
  );
};

export default Board;
