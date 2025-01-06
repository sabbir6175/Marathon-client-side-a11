import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

{/* https://i.ibb.co.com/DDMmg0x/download-12.jpg */}


        <SwiperSlide><img className='bg-cover bg-no-repeat w-full h-96' src="https://i.ibb.co.com/VNwtwjx/download-13.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='bg-cover w-full h-96' src="https://i.ibb.co.com/VNwtwjx/download-13.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='bg-cover w-full h-96' src="https://i.ibb.co.com/VNwtwjx/download-13.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
