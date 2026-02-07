import React from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/swiper-react';
import 'swiper/swiper-bundle.css';
import '../../styles/CarouselEpisodios.css';
import { assetPath } from '../../utils/assets';

const images = [
  '/images/carousel/episodios/1.webp',
  '/images/carousel/episodios/2.webp',
  '/images/carousel/episodios/4.webp',
  '/images/carousel/episodios/5.webp',
  '/images/carousel/episodios/6.webp',
  '/images/carousel/episodios/8.webp',
  '/images/carousel/episodios/9.webp',
  '/images/carousel/episodios/10.webp',
  '/images/carousel/episodios/11.webp',
  '/images/carousel/episodios/12.webp',
  '/images/carousel/episodios/13.webp',
  '/images/carousel/episodios/14.webp',
  '/images/carousel/episodios/15.webp',
  '/images/carousel/episodios/16.webp',
  // …
].map(assetPath);

export default function CarouselEpisodios() {
  return (
    <div className="carousel-episodios">
      <Swiper
        className="swiper-episodios"
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 6000,
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
