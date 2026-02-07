import React, { useState, useLayoutEffect, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Titulo from '../components/homepage/Titulo';
import Typewriter from '../components/common/Typewriter';
import '../styles/Home.css';

const CarouselEpisodios = lazy(
  () => import('../components/homepage/CarouselEpisodios')
);
const CarouselPersonajes = lazy(
  () => import('../components/homepage/CarouselPersonajes')
);
const CarouselLugares = lazy(
  () => import('../components/homepage/CarouselLugares')
);
const TextoPersonajes = lazy(
  () => import('../components/homepage/TextoPersonajes')
);
const TextoLugares = lazy(() => import('../components/homepage/TextoLugares'));
const TextoEpisodios = lazy(
  () => import('../components/homepage/TextoEpisodios')
);
const Footer = lazy(() => import('../components/homepage/Footer'));

function Home() {
  const [frase, setFrase] = useState(null);

  const frases = [
    {
      texto:
        '"¿Y qué hay acerca de la realidad donde Hitler curó el cáncer, Morty? La respuesta es: no pienses en ello."',
    },
  ];

  useLayoutEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      offset: 120,
      once: false,
      mirror: false,
    });
  }, []);

  useLayoutEffect(() => {
    if (frase) {
      AOS.refreshHard();
    }
  }, [frase]);

  useLayoutEffect(() => {
    const idx = Math.floor(Math.random() * frases.length);
    setFrase(frases[idx]);
  }, []);

  return (
    <div className="homepage">
      <main>
        <div
          className="background-test-home"
          role="presentation"
          aria-hidden="true"
        >
          <section
            className="title_and_quote_container_home"
            data-aos="zoom-in"
            data-aos-delay="300"
            aria-labelledby="titulo-home"
          >
            <Titulo id="titulo-home" />
          </section>

          {frase && (
            <section
              className="highlight-container"
              data-aos="flip-up"
              data-aos-delay="1500"
              aria-live="polite"
            >
              <p className="highlight-text">
                <Typewriter text={frase.texto} speed={40} delay={2500} />
              </p>
            </section>
          )}
        </div>

        <section
          className="carousel-personajes-section"
          aria-labelledby="titulo-personajes"
        >
          <Suspense
            fallback={
              <div role="status" aria-live="polite">
                Cargando sección...
              </div>
            }
          >
            <CarouselPersonajes />
            <TextoPersonajes />
          </Suspense>
        </section>

        <section
          className="carousel-lugares-section"
          aria-labelledby="titulo-lugares"
        >
          <Suspense
            fallback={
              <div role="status" aria-live="polite">
                Cargando sección...
              </div>
            }
          >
            <TextoLugares />
            <CarouselLugares />
          </Suspense>
        </section>

        <section
          className="carousel-episodios-section"
          aria-labelledby="titulo-episodios"
        >
          <Suspense
            fallback={
              <div role="status" aria-live="polite">
                Cargando sección...
              </div>
            }
          >
            <TextoEpisodios />
            <CarouselEpisodios />
          </Suspense>
        </section>
      </main>

      <footer>
        <Suspense
          fallback={
            <div role="status" aria-live="polite">
              Cargando sección...
            </div>
          }
        >
          <Footer />
        </Suspense>
      </footer>
    </div>
  );
}

export default Home;
