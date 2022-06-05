import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

const SolarSystem = () => (
  <div data-testid="solar-system">
    <Title headline="planetas" />
    <div className="planetas-container">
      {planets.map(
        (a, i) => <PlanetCard key={ i } planetName={ a.name } planetImage={ a.image } />,
      )}
    </div>
  </div>
);

export default SolarSystem;
