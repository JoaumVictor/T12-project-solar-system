import React from 'react';
import PropTypes from 'prop-types';

const PlanetCard = ({ planetName, planetImage }) => (
  <div key={ planetName } className="block-planetas" data-testid="planet-card">
    <p className="txt-planeta" data-testid="planet-name">{planetName}</p>
    <img className="img-planeta" src={ planetImage } alt={ `Planeta ${planetName}` } />
  </div>
);

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
