import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";

export default function FavoriteGameSection() {
  return (
    <div className="mx-6 my-3 bg-[#D9D9D9] rounded-md p-2">
      <h1 className="m-4 text-lg md:text-xl font-semibold text-black">
        Favorite's Games
      </h1>
      <Swiper
        watchSlidesProgress={true}
        autoplay={true}
        spaceBetween={20}
        className="mySwiper"
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 6</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 7</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 8</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
