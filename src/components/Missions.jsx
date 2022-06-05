import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

const Missions = () => (
  <div data-testid="missions">
    <Title headline="Missões" />
    <div className="missions-container">
      {missions.map((alvo) => (
        <MissionCard
          key={ alvo.name }
          name={ alvo.name }
          year={ alvo.year }
          country={ alvo.country }
          destination={ alvo.destination }
        />
      ))}
    </div>
  </div>
);

export default Missions;
