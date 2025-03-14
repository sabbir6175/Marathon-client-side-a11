import { div } from "framer-motion/client";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CarouselComponent2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content: "Carousel 2 - Slide 1 Content",
      imgSrc: "https://i.ibb.co.com/jkYmLMkw/run1.jpg",
    },
    {
      id: 2,
      content: "Carousel 2 - Slide 2 Content",
      imgSrc: "https://i.ibb.co.com/nxNSH3Q/run2.jpg",
    },
    {
      id: 3,
      content: "Carousel 2 - Slide 3 Content",
      imgSrc: "https://i.ibb.co.com/8nC2v3Zp/run3.jpg",
    },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1500);

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="py-20">
      <span className="text-center flex items-center justify-center text-lg uppercase">
        About us
      </span>
      <h2 className="text-center text-3xl mb-3 font-bold uppercase md:text-4xl ">
        Welcome to RUNCLUB
      </h2>
      <p class="text-lg text-gray-600 mb-6  md:max-w-2xl m-auto text-center opacity-70">
        Welcome to our vibrant running community, where we organize exciting
        running events, provide helpful running tutorials, and keep you informed
        with the latest running news.
      </p>

      <div className="relative flex items-center justify-center w-full h-[200px] mt-32 rounded-lg md:max-w-3xl mx-auto">
        <FiChevronLeft
          className="absolute left-5 text-secondary text-[1.8rem] cursor-pointer"
          onClick={prevSlide}
        />
        <div className="text-[1.3rem] text-secondary font-[600]">
          {
            <img
              src={slides[currentSlide].imgSrc}
              alt={slides[currentSlide].content}
              className="w-full object-cover  text-black"
            />
          }
        </div>
        <FiChevronRight
          className="absolute right-5 text-secondary text-[1.8rem] cursor-pointer"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default CarouselComponent2;
