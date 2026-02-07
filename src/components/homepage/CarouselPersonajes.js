import React from 'react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import 'swiper/swiper-bundle.css';
import '../../styles/CarouselPersonajes.css';

const images = [
  '/images/carousel/personajes/Rick2.webp',
  '/images/carousel/personajes/AbradolphLincler.webp',
  '/images/carousel/personajes/Hamurai.webp',
  '/images/carousel/personajes/MrMeeseeks.webp',
  '/images/carousel/personajes/ScaryTerry.webp',
  '/images/carousel/personajes/ThePresident.webp',
  '/images/carousel/personajes/Lawnmower_dog.webp',
  '/images/carousel/personajes/Rick.webp',
  '/images/carousel/personajes/TheDevil.webp',
  '/images/carousel/personajes/Tinkles.webp',
  '/images/carousel/personajes/Unidad.webp',
  '/images/carousel/personajes/Max.webp',
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
