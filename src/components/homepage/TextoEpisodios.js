import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TextoEpisodios.css';

function TextoEpisodios() {
  return (
    <div className="textoSectionEpisodios">
      <h3 className={'texto_header_episodios'}>
        ¡Revive los mejores momentos a través de los{' '}
        <Link className={'green_word'} to={'/episodios'}>
          episodios
        </Link>
        !
      </h3>
      <p className={'description_episodios_home'}>
        Sumérgete en cada capítulo y recuerda las escenas más impactantes,
        divertidas o emocionantes. Encuentra tu episodio favorito o descubre
        alguno que aún no hayas visto.{' '}
      </p>
    </div>
  );
}

export default TextoEpisodios;
