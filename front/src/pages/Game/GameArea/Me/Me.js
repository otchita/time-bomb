import React from 'react';
import { Card } from '../../../../components/Card/Card.style';
import bomb from '../../../../images/bomb.jpg';
import defuse from '../../../../images/defuse.jpg';
import moriarty from '../../../../images/moriarty.jpg';
import secure from '../../../../images/secure.jpg';
import sherlock from '../../../../images/sherlock.jpg';
import { CardsContainer, MeContainer, PlayerName } from './Me.style';

const roleToImg = {
  moriarty,
  sherlock,
};

const Me = ({ playerName, role, cards }) => (
  <MeContainer>
    {cards && (
      <>
        <PlayerName>{playerName}</PlayerName>
        <CardsContainer>
          {new Array(cards.bomb).fill(0).map((_, index) => (
            <Card src={bomb} alt="bomb" key={`bomb-${index}`} />
          ))}
          {new Array(cards.defuse).fill(0).map((_, index) => (
            <Card src={defuse} alt="defuse" key={`bomb-${index}`} />
          ))}
          {new Array(cards.secure).fill(0).map((_, index) => (
            <Card src={secure} alt="secure" key={`bomb-${index}`} />
          ))}
        </CardsContainer>
      </>
    )}
    {role && <Card src={roleToImg[role]} alt={role} />}
  </MeContainer>
);

export default Me;
