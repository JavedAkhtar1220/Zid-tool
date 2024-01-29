"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { convertToPDFMockData } from "../../mockData";

const MySlider: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current?.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current?.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 border rounded-full p-4"
        onClick={handlePrev}
      >
        <GrLinkPrevious />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 border rounded-full p-4"
        onClick={handleNext}
      >
        <GrLinkNext />
      </button>
      <div>
        <h1 className="font-bold text-4xl">Convert from PDF</h1>
        <div className="pl-8 pr-20 mt-8">
          <Slider ref={sliderRef} {...settings}>
            {convertToPDFMockData.map((val) => (
              <div className="p-2" key={val.id}>
                <div
                  className="border p-4 h-48 rounded-xl hover:shadow-md cursor-pointer"
                  key={val.id}
                >
                  <Image
                    src={val.img_uri}
                    alt={val.heading}
                    width={65}
                    height={65}
                  />
                  <h2 className="text-xl font-bold mt-2">{val.heading}</h2>
                  <p className="mt-2 text-gray-500 text-sm">{val.label}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MySlider;
