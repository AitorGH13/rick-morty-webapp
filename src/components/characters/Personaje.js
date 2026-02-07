import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Personaje.css';

function Personaje({ personaje }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`carta_personaje ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleFlip();
        }
      }}
      role="button"
      tabIndex="0"
      aria-pressed={isFlipped}
      aria-label={`Ver detalles de ${personaje.name}`}
    >
      <div className="carta_personaje_inner">
        <div className="carta_personaje_front">
          <img
            src={personaje.image}
            alt={`Imagen de ${personaje.name}`}
            className="personaje_img"
          />
          <h2 className="personaje_nombre">{personaje.name}</h2>
        </div>
        <div className="carta_personaje_back">
          <p>
            <strong>Especie:</strong> {personaje.species}
          </p>
          <p>
            <strong>Estado:</strong>{' '}
            <span
              className={`status-indicator status-${personaje.status.toLowerCase()}`}
              aria-hidden="true"
            ></span>
            <span>{personaje.status}</span>
          </p>
          <p>
            <strong>Género:</strong> {personaje.gender}
          </p>
          <p>
            <strong>Origen:</strong> {personaje.origin.name}
          </p>
          <p>
            <strong>Ubicación:</strong> {personaje.location.name}
          </p>
        </div>
      </div>
    </div>
  );
}

Personaje.propTypes = {
  personaje: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['Alive', 'Dead', 'unknown']).isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Personaje;
