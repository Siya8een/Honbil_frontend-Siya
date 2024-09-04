import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "./assets/images/bike1.webp";
import slide_image_2 from "./assets/images/bike2.webp";
import slide_image_3 from "./assets/images/bike3.jpeg";
import slide_image_4 from "./assets/images/bike4.jpeg";
import slide_image_5 from "./assets/images/bike5.jpeg";
import slide_image_6 from "./assets/images/bike1.webp";
import slide_image_7 from "./assets/images/bike3.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
function NewSlider() {
  return (
    <div className="container bg-slate-900">
      {/* <h1 className="heading">Flower Gallery</h1> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            <AiOutlineArrowLeft
              style={{ fontSize: "1.4em", fill: "#00df9a" }}
            />
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            <AiOutlineArrowRight
              style={{ fontSize: "1.4em", fill: "#00df9a" }}
            />
          </div>
          <div className="swiper-pagination "></div>
        </div>
      </Swiper>
    </div>
  );
}

export default NewSlider;
