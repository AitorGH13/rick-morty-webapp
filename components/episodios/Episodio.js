import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Episodio({ name, air_date, episode, characters }) {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [nombresPersonajes, setNombresPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const limiteInicial = 5;

  useEffect(() => {
    const fetchPersonajes = async () => {
      if (!characters.length) {
        setCargando(false);
        return;
      }

      // Extraer IDs de cada URL de personaje
      const ids = characters
        .map((url) => {
          const partes = url.split('/');
          return partes[partes.length - 1];
        })
        .filter((id) => !!id)
        .join(',');

      // Hacer una sola petición para todos los IDs
      const unicaUrl = `https://rickandmortyapi.com/api/character/[${ids}]`;

      try {
        const res = await fetch(unicaUrl);
        if (res.status === 429) {
          console.error(
            'Rate limit (429) en única llamada. Intenta de nuevo más tarde.'
          );
          setCargando(false);
          return;
        }
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const datos = await res.json();
        // Si viene un solo personaje, la respuesta es un objeto; si hay varios, es un array
        const personajesArray = Array.isArray(datos) ? datos : [datos];
        setNombresPersonajes(personajesArray.map((p) => p.name));
      } catch (err) {
        console.error('Error cargando personajes:', err);
      } finally {
        setCargando(false);
      }
    };

    fetchPersonajes();
  }, [characters]);

  const mostrados = mostrarTodos
    ? nombresPersonajes
    : nombresPersonajes.slice(0, limiteInicial);

  return (
    <div className="episodio_card">
      <h3 className="episodio_titulo">{name}</h3>
      <p>
        <strong>Fecha de estreno:</strong> {air_date}
      </p>
      <p>
        <strong>Episodio:</strong> {episode}
      </p>

      <div className="personajes_section">
        <h4 id="personajes-heading">Personajes:</h4>
        <div aria-live="polite">
          {cargando ? (
            <p>Cargando personajes…</p>
          ) : (
            <>
              {mostrados.length ? (
                <ul aria-labelledby="personajes-heading">
                  {mostrados.map((n, i) => (
                    <li key={i}>{n}</li>
                  ))}
                </ul>
              ) : (
                <p>No hay personajes.</p>
              )}

              {nombresPersonajes.length > limiteInicial && (
                <button
                  onClick={() => setMostrarTodos(!mostrarTodos)}
                  className="mostrar_mas_btn"
                  aria-expanded={mostrarTodos}
                  aria-label={
                    mostrarTodos
                      ? 'Mostrar menos personajes'
                      : 'Mostrar más personajes'
                  }
                >
                  {mostrarTodos ? 'Mostrar menos' : 'Mostrar más'}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Episodio.propTypes = {
  name: PropTypes.string.isRequired,
  air_date: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Episodio;
