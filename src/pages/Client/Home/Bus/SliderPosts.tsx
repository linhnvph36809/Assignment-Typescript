import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Post from './components/Post';


export default function SliderPosts() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }}
        className="sliderPost hover:cursor-grab"
      >
        <SwiperSlide><Post/></SwiperSlide>
        <SwiperSlide><Post/></SwiperSlide>
        <SwiperSlide><Post/></SwiperSlide>
        <SwiperSlide><Post/></SwiperSlide>
      </Swiper>
    </>
  );
}
