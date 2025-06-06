import React from 'react';
import PropTypes from 'prop-types';
import './Integrante.web.css';

function Integrante({ nombre, apellidos, descripcion, foto, correo }) {
  return (
    <article
      className="integrante_container"
      aria-label={`Información sobre ${nombre} ${apellidos}`}
    >
      <img
        src={foto}
        alt={`Foto de ${nombre} ${apellidos}`}
        className="integrante_imagen"
      />

      <div className="integrante_info">
        <h3 className="integrante_nombre">
          {nombre} {apellidos}
        </h3>
        <p className="integrante_descripcion">{descripcion}</p>
        <p className="integrante_correo">
          <span className="correo_negrita">Correo: </span>
          <a href={`mailto:${correo}`} className="correo_link">
            {correo}
          </a>
        </p>
      </div>
    </article>
  );
}

Integrante.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
  correo: PropTypes.string.isRequired,
};

export default Integrante;
