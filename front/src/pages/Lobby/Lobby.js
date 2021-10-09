import axios from 'axios';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { createCookie } from '../../helpers/createCookie';
import { LobbyContainer } from './Lobby.style';

const Lobby = () => {
  const [createGameState, createGame] = useAsyncFn(async () => {
    const response = await axios.post('http://localhost:5000/api/games');
    return response?.data;
  });

  const gameId = createGameState?.value;

  if (gameId) {
    createCookie(`time-bomb-admin/${gameId}`, true, 120);
    window.location = `/game/${gameId}`;
  }

  return (
    <LobbyContainer>
      <button onClick={createGame}>Créer une partie</button>
    </LobbyContainer>
  );
};

export default Lobby;
