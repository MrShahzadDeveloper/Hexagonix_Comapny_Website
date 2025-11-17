"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { cards } from "@/data/card";
import Image from "next/image";

export default function CardCarousel() {
  const totalSlides = cards.length;

  // ✅ React states instead of DOM query
  const [currentIndex, setCurrentIndex] = useState(1);
  const [progress, setProgress] = useState((1 / totalSlides) * 100);

  return (
    <div className="xl:px-24 mx-auto pt-10">
      <Swiper
        modules={[Pagination]}
        loop={true}
        spaceBetween={40}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        onInit={(swiper) => {
          setCurrentIndex(swiper.realIndex + 1);
          setProgress(((swiper.realIndex + 1) / totalSlides) * 100);
        }}
        onSlideChange={(swiper) => {
          const newIndex = (swiper.realIndex % totalSlides) + 1;
          setCurrentIndex(newIndex);
          setProgress((newIndex / totalSlides) * 100);
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },   // 📱 Mobile
          640: { slidesPerView: 2, spaceBetween: 30 },   // 📱 Tablets
          1024: { slidesPerView: 3, spaceBetween: 40 },  // 💻 Desktop
        }}
      >

        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <div
                className={`flex flex-col gap-5 rounded-lg p-6 transition-all duration-300
                ${isActive
                    ? "bg-white shadow-lg border-2 border-pink-500 mt-5"
                    : "bg-white shadow-md border border-gray-200 mb-7"
                  }`}
              >
                {/* Gradient border with ring */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center ring-1 ring-transparent">
                    <Image
                      width={48}
                      height={48}
                      src={item.img}
                      alt={item.title}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                <h1
                  className={`font-bold text-xl ${isActive ? "text-pink-600" : "text-[#2D3748]"
                    }`}
                >
                  {item.title}
                </h1>
                <p className="text-[#718096] text-sm">{item.description}</p>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Pagination row */}
        <div className="mt-20 flex flex-col  justify-center">
          {/* Dots in center */}
          <div
            className="custom-pagination flex gap-2 justify-center items-center flex-1
                      [&>.swiper-pagination-bullet]:w-3
                      [&>.swiper-pagination-bullet]:h-3
                      [&>.swiper-pagination-bullet]:rounded-full
                    [&>.swiper-pagination-bullet]:bg-gray-500
                      [&>.swiper-pagination-bullet-active]:bg-gradient-to-tr
                    [&>.swiper-pagination-bullet-active]:from-[#57007B]
                    [&>.swiper-pagination-bullet-active]:to-[#F76680]"
          ></div>

          {/* Fraction + progress on right side */}
          <div className="ml-6 hidden md:flex items-center justify-end gap-4 text-[#57007B] ">
            <span className="custom-fraction-current text-lg font-semibold">
              {currentIndex.toString().padStart(2, "0")}
            </span>
            <div className="w-20 h-[2px] bg-gray-200 relative overflow-hidden">
              <div
                className="swiper-pagination-progress absolute left-0 top-0 h-full bg-[#57007B] transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="custom-fraction-total text-lg font-semibold">
              {totalSlides.toString().padStart(2, "0")}
            </span>
          </div>
        </div>

      </Swiper>
    </div>
  );
}
