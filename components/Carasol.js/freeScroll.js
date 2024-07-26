import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./freeScroll.module.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const Caracol = () => {
  return (
    <>
      <Swiper
        slidesPerView={2.3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-white h-[300px] custom-swiper"
        breakpoints={{
          360:{
            slidesPerView:1,
            spaceBetween:10
          },
          460:{
            slidesPerView:1.5,
            spaceBetween:10
          },
          700:{
            slidesPerView:2.3,
            spaceBetween:10
          }

        }}
      >
        <SwiperSlide className="cursor-pointer" style={{}}>
          <Image
            src={"/Blogs/blockchain.jpg"}
            alt="blog-image"
            fill
            className="-z-50"
          />
          <div className="h-full p-4">
            <div className="flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 mr-2 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>

            <span className="text-xs text-orange-500 font-semibold">27 JULY 2024</span>
            </div>
            <div className="absolute bottom-10 ">
              <h1 className="w-4/6 leading-none text-2xl font-semibold">
                Blockchain is shaping the new world
              </h1>
              <p className="leading-none text-slate-300 mt-2">
                A technology that will most likely change the shape of the
                present world...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer" style={{}}>
          <Image
            src={"/Blogs/blockchain.jpg"}
            alt="blog-image"
            fill
            className="-z-50"
          />
          <div className="h-full p-4">
            <div className="flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 mr-2 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>

            <span className="text-xs text-orange-500 font-semibold">27 JULY 2024</span>
            </div>
            <div className="absolute bottom-10 ">
              <h1 className="w-4/6 leading-none text-2xl font-semibold">
                Blockchain is shaping the new world
              </h1>
              <p className="leading-none text-slate-300 mt-2">
                A technology that will most likely change the shape of the
                present world...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer" style={{}}>
          <Image
            src={"/Blogs/blockchain.jpg"}
            alt="blog-image"
            fill
            className="-z-50"
          />
          <div className="h-full p-4">
            <div className="flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 mr-2 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>

            <span className="text-xs text-orange-500 font-semibold">27 JULY 2024</span>
            </div>
            <div className="absolute bottom-10 ">
              <h1 className="w-4/6 leading-none text-2xl font-semibold">
                Blockchain is shaping the new world
              </h1>
              <p className="leading-none text-slate-300 mt-2">
                A technology that will most likely change the shape of the
                present world...
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer" style={{}}>
          <Image
            src={"/Blogs/blockchain.jpg"}
            alt="blog-image"
            fill
            className="-z-50"
          />
          <div className="h-full p-4">
            <div className="flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 mr-2 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>

            <span className="text-xs text-orange-500 font-semibold">27 JULY 2024</span>
            </div>
            <div className="absolute bottom-10 ">
              <h1 className="w-4/6 leading-none text-2xl font-semibold">
                Blockchain is shaping the new world
              </h1>
              <p className="leading-none text-slate-300 mt-2">
                A technology that will most likely change the shape of the
                present world...
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Caracol;
