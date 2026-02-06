import React from 'react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import 'swiper/swiper-bundle.css';
import '../../styles/CarouselLugares.css';

const images = [
  '/images/carousel/lugares/Anatomy_Park.webp',
  '/images/carousel/lugares/Dimension.webp',
  '/images/carousel/lugares/Meta_reality.webp',
  '/images/carousel/lugares/PrimeDimension.webp',
  '/images/carousel/lugares/TheCitadel.webp',
  '/images/carousel/lugares/Capsula.webp',
  '/images/carousel/lugares/TamorusLite.webp',
  '/images/carousel/lugares/Dimensione_35-C.webp',
  '/images/carousel/lugares/Multiverse.webp',
  '/images/carousel/lugares/Licencia.webp',
  // …
];

export default function CarouselPersonajes() {
  return (
    <div className="carousel-lugares">
      <Swiper
        className="swiper-lugares"
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 7000,
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
