/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './Slider.css';
import Image from "next/image";
import image from "../images/houses/lighthouse.png";

export default function TourSlider() {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1, // Изменено на 1, чтобы показывать 1 слайд за раз
      slidesToScroll: 1,
    };
  
    if (!isClient) {
      return null;
    }
  
    return (
        <div className="slider-container">
          <Slider {...settings} className="sliderCont">
            <div style={{ width: "92%", borderRadius: "4px", overflow: "visible" }}>
              <iframe
                width="92%"
                height="416"
                src="https://rutube.ru/play/embed/3cac1debc9f0ab455973edecd68742b1/"
                frameBorder="0"
                allow="clipboard-write; autoplay"
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen
                style={{ zIndex: 0, width:"92%", borderRadius: "4px", overflow: "visible" }}
              ></iframe>

              <Image
                className="image1"
                src={image}
                alt="Картинка 1"
                width={296}
                height={168}
                style={{
                  position: "absolute",
                  bottom: "-43px", // Отрицательное значение для смещения вниз
                  left: "-40px",
                  zIndex: 1,
                }}
              />
              <Image
                className="image2"
                src={image}
                alt="Картинка 2"
                width={96}
                height={80}
                style={{
                  position: "absolute",
                  bottom: "-43px", // Отрицательное значение для смещения вниз
                  left: "296px",
                  zIndex: 10,
                  overflow: "visible"
                }}
              />
              <Image
                className="image3"
                src={image}
                alt="Картинка 3"
                width={96}
                height={80}
                style={{
                  position: "absolute",
                  bottom: "-43px", // Отрицательное значение для смещения вниз
                  left: "392px",
                  zIndex: 1,
                }}
              />
            </div>
            <div className="w-[720px] h-[405px] overflow-visible">
            </div>
          </Slider>
        </div>
    );
}
