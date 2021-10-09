import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAsyncFn } from 'react-use';
import Cookies from 'universal-cookie';
import CreatePlayer from './CreatePlayer/CreatePlayer';
import GameArea from './GameArea/GameArea';

const Game = () => {
  let { id } = useParams();
  const cookieUserInfo = `time-bomb/${id}`;
  const cookieUserIsAdmin = `time-bomb-admin/${id}`;
  const cookies = new Cookies();

  // fetch game state function
  const [gameStateState, fetchGameState] = useAsyncFn(async () => {
    const response = await axios.get(
      `http://localhost:5000/api/games/${id}/state`
    );
    return response?.data;
  });

  const gameState = gameStateState.value;

  // initialize game state and polling
  useEffect(() => {
    if (!gameState) {
      fetchGameState();
      setInterval(fetchGameState, 1000);
    }
  }, [fetchGameState]);

  const [userInfo, setUserInfo] = useState(cookies.get(cookieUserInfo));

  // create a game
  const [, startGame] = useAsyncFn(async () => {
    await axios.post(`http://localhost:5000/api/games/${id}/start`);
  });

  const [cardsAreFetched, setCardsAreFetched] = useState(false);
  const [roleIsFetched, setRoleIsFetched] = useState(false);

  // fetch cards
  const [cardsState, fetchCards] = useAsyncFn(async playerId => {
    const response = await axios.get(
      `http://localhost:5000/api/games/${id}/players/${playerId}/cards`
    );
    setCardsAreFetched(true);
    return response?.data;
  });

  // fetch role
  const [roleState, fetchRole] = useAsyncFn(async playerId => {
    setRoleIsFetched(true);
    const response = await axios.get(
      `http://localhost:5000/api/games/${id}/players/${playerId}/role`
    );
    return response?.data;
  });

  useEffect(() => {
    if (
      gameState &&
      gameState.gameStarted &&
      gameState.phase === 1 &&
      gameState.step === 1 &&
      !roleIsFetched &&
      userInfo
    ) {
      fetchRole(userInfo.id);
    }
  }, [gameState]);

  useEffect(() => {
    if (
      gameState &&
      gameState.gameStarted &&
      gameState.step === 1 &&
      !cardsAreFetched &&
      userInfo
    ) {
      fetchCards(userInfo.id);
    }
  }, [gameState]);

  useEffect(() => {
    if (gameState && gameState.gameStarted && gameState.step === 2) {
      setCardsAreFetched(false);
    }
  }, [gameState]);

  if (!gameState) {
    return null;
  }

  if (!gameState.gameStarted) {
    if (!userInfo) {
      return (
        <CreatePlayer
          gameId={id}
          cookieUserInfo={cookieUserInfo}
          onPlayerCreated={() => {
            setUserInfo(cookies.get(cookieUserInfo));
          }}
        />
      );
    }

    const isAdmin = cookies.get(cookieUserIsAdmin);

    return (
      <>
        <div>Nombre de joueurs : {gameState.playerNames.length}</div>
        {isAdmin && (
          <button
            onClick={startGame}
            disabled={gameState.playerNames.length < 4}
          >
            Start game
          </button>
        )}
      </>
    );
  }
  if (!userInfo) {
    return null;
  }

  if (gameState.winningTeam === 'moriarty') {
    return 'Moriarty wins!';
  }

  if (gameState.winningTeam === 'sherlock') {
    return 'Sherlock wins!';
  }

  const otherPlayers = gameState.playerNames.filter(
    name => name !== userInfo.name
  );

  return (
    <GameArea
      gameState={gameState}
      gameId={id}
      otherPlayers={otherPlayers}
      role={roleState?.value}
      cards={cardsState?.value}
      userInfo={userInfo}
    />
  );
};

export default Game;
