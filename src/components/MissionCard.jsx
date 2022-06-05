import React from 'react';
import PropTypes from 'prop-types';

const MissionCard = ({ name, year, country, destination }) => (
  <div className="missions-cards" data-testid="mission-card">
    <div className="separa-cards">
      <p data-testid="mission-name">{ name }</p>
    </div>
    <p data-testid="mission-year">{ year }</p>
    <p data-testid="mission-country">{ country }</p>
    <p data-testid="mission-destination">{ destination }</p>
  </div>
);

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
