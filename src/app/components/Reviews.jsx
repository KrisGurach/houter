/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { reviews } from "../mockData";
import './ReviewSlider.css';

export default function Reviews() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true, 
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const renderSlides = () => {
    return reviews.map((review, index) => (
      <div key={index} className="slide">
        <Image
          src={review.image}
          alt={`Отзыв ${index + 1}`}
          layout="responsive"
          objectFit="cover"
          className="slider-image"
        />
      </div>
    ));
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="mt-[120px]">
      <div className="h-[1px] w-[32px] bg-[var(--color-yellow)]"></div>
      <h2 className="text-xs text-[var(--color-yellow)] font-[family-name:var(--font-lexend-medium)]">
        See Our Review
      </h2>
      <p className="text-2xl text-[var(--color-text)] font-[family-name:var(--font-lexend-semiBold)]">
        What Our User Say About Us
      </p>
      <div className="slider-container" style={{ height: '505px' }}>
        <Slider {...settings}>
          {renderSlides()}
        </Slider>
      </div>
    </div>
  );
}
