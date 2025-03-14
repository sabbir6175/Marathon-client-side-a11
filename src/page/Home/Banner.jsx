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


        <SwiperSlide><img className='bg-cover  bg-no-repeat w-full h-72 md:h-80 lg:h-[500px]' src="https://i.ibb.co.com/bg9VXYQc/banner1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='bg-cover  bg-no-repeat w-full h-72 md:h-80 lg:h-[500px]' src="https://i.ibb.co.com/Dyc3Qxt/istockphoto-2173762770-612x612.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='bg-cover  bg-no-repeat w-full h-72 md:h-80 lg:h-[500px]' src="https://i.ibb.co.com/VcMsGL2C/istockphoto-1439744187-612x612.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img className='bg-cover  bg-no-repeat w-full h-72 md:h-80 lg:h-[500px]' src="https://i.ibb.co.com/TxSHmc4K/happy-athletic-women-running-a-marathon-and-giving-high-five-to-each-other.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
