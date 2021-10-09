import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAsyncFn } from 'react-use';
import { createCookie } from '../../../helpers/createCookie';
import { CreatePlayerContainer } from './CreatePlayer.style';

const CreatePlayer = ({ gameId, cookieUserInfo, onPlayerCreated }) => {
  const [createPlayerState, createPlayer] = useAsyncFn(async playerName => {
    const response = await axios.post(
      `http://localhost:5000/api/games/${gameId}/players`,
      { playerName }
    );

    return response?.data;
  });

  const [nameState, setName] = useState('');

  const onSubmit = async event => {
    event.preventDefault();
    await createPlayer(nameState);
  };

  useEffect(() => {
    if (createPlayerState.value) {
      document.cookie = createCookie(
        cookieUserInfo,
        JSON.stringify({
          name: nameState,
          id: createPlayerState.value,
        }),
        1000
      );
      onPlayerCreated();
    }
  }, [createPlayerState, nameState]);

  return (
    <CreatePlayerContainer onSubmit={onSubmit}>
      <input
        type="text"
        value={nameState}
        onChange={event => setName(event.target.value)}
      />
      <input type="submit" value="C'est parti" />
    </CreatePlayerContainer>
  );
};

export default CreatePlayer;
