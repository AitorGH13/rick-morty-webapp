import React from 'react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import 'swiper/swiper-bundle.css';
import '../../styles/CarouselPersonajes.css';

const BASE_PATH = '/rick-morty-webapp';

const images = [
  `${BASE_PATH}/images/carousel/personajes/Rick2.webp`,
  `${BASE_PATH}/images/carousel/personajes/AbradolphLincler.webp`,
  `${BASE_PATH}/images/carousel/personajes/Hamurai.webp`,
  `${BASE_PATH}/images/carousel/personajes/MrMeeseeks.webp`,
  `${BASE_PATH}/images/carousel/personajes/ScaryTerry.webp`,
  `${BASE_PATH}/images/carousel/personajes/ThePresident.webp`,
  `${BASE_PATH}/images/carousel/personajes/Lawnmower_dog.webp`,
  `${BASE_PATH}/images/carousel/personajes/Rick.webp`,
  `${BASE_PATH}/images/carousel/personajes/TheDevil.webp`,
  `${BASE_PATH}/images/carousel/personajes/Tinkles.webp`,
  `${BASE_PATH}/images/carousel/personajes/Unidad.webp`,
  `${BASE_PATH}/images/carousel/personajes/Max.webp`,
  // …
];

export default function CarouselPersonajes() {
  return (
    <div className="carousel-personajes">
      <Swiper
        className="swiper-personajes"
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ padding: '2rem 0' }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} style={{ width: '100%', height: 'auto' }}>
            <img
              src={src}
              loading="lazy"
              alt={`Slide ${idx + 1}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
