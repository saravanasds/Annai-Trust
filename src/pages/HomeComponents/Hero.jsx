import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Parallax } from 'react-parallax';

import Img1 from '../../assets/slider1.jpg';
import Img2 from '../../assets/slider2.jpg';
import Img3 from '../../assets/slider3.jpg';

const Hero = () => {
  const slides = [
    {
      image: Img1,
      title: 'Empowering Health Through Education',
      subtitle: 'Join us in advancing nursing and paramedical skills.',
      buttonText: 'Learn More',
    },
    {
      image: Img2,
      title: 'Train for Paramedical Excellence',
      subtitle: 'Enhance your career with our comprehensive programs.',
      buttonText: 'Enroll Now',
    },
    {
      image: Img3,
      title: 'Support Community Wellness',
      subtitle: 'Participate in our Blood Donation drives and training.',
      buttonText: 'Start Today',
    },
  ];

  return (
    <section className="hero font-poppins">
      <Swiper
        spaceBetween={30}
        speed={2000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-dot"></span>`,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Parallax Effect */}
            <Parallax bgImage={slide.image} bgImageAlt="background" strength={500}>
              <div className="relative h-[90vh] flex justify-center items-center bg-cover bg-center">
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 flex flex-col justify-center items-center text-center px-4">
                  {/* Slide Number Indicator */}
                  <div className="absolute top-10 right-5 text-white opacity-80 text-lg font-semibold bg-black/50 px-4 py-1 rounded-md">
                    {index + 1}/{slides.length}
                  </div>
                  <h2 className="text-4xl md:text-6xl font-extrabold tracking-wider mb-6 animate-fadeInLeft text-white drop-shadow-lg leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeInUp font-light max-w-3xl drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <button className="bg-gradient-to-r from-white to-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 text-black text-xl md:text-2xl font-bold py-4 px-5 md:px-10 rounded-xl shadow-xl transition-transform duration-300 ease-in-out hover:scale-110 animate-fadeInUp">
                    Learn More
                  </button>
                </div>
              </div>
            </Parallax>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
