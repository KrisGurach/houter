"use client";

import Image from "next/image";
import React, { useRef } from "react";
import houses from "../houses";

export default function Recommendation() {
    const scrollRef = useRef();

    const scrollLeft = () => {
      scrollRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    };
  
    return (
      <div className="mt-[120px] flex items-center">
        <button onClick={scrollLeft} className="review__scroll-button review__scroll-button_left"></button>
        <div className="w-[90%] overflow-x-auto" ref={scrollRef}>
          <div className="flex">
            {houses.map((x, index) => (
              <HouseCard
                key={index}
                image={x.image}
                name={x.name}
                price={x.price}
                photo={x.photo}
                owner={x.owner}
                location={x.location}
              />
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="review__scroll-button review__scroll-button_right"></button>
      </div>
    );
  }
  
    function HouseCard({ image, name, price, photo, owner, location }) {
      return (
        <>
        <div className="">
          <Image src={image} className="" alt="изображение" />
          <p className="">{name}</p>
          <p className="">{price}</p>
        </div>
        <div>
          <Image src={photo} className="" alt="изображение" />
          <p className="">{owner}</p>
          <p className="">{location}</p>
        </div>
        </>
      );
}
