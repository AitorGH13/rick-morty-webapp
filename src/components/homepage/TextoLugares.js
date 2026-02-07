import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/TextoLugares.css';

function TextoLugares() {
  return (
    <div className="textoSectionLugares">
      <h3 className={'texto_header_lugares'}>
        ¡Descubre los{' '}
        <Link className={'green_word'} to={'/lugares'}>
          lugares
        </Link>{' '}
        más icónicos del universo de la serie!{' '}
      </h3>
      <p className={'description_lugares_home'}>
        Viaja por escenarios asombrosos, desde reinos lejanos hasta rincones
        ocultos llenos de misterio. Cada lugar tiene su propia atmósfera y
        leyenda, y ahora puedes explorarlos todos desde un solo sitio.{' '}
      </p>
    </div>
  );
}

export default TextoLugares;
