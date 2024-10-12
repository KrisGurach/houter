"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { houses, villas, apartments } from "../mockData";

export default function Recommendation() {
  const [currentType, setCurrentType] = useState("house");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const scrollRef = useRef();

  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.scrollWidth;
      setScrollWidth(width);
    }
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
    if (scrollPosition < 0) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;

        if (1296 + 500 * newCount < scrollWidth) {
          setIsDisabled(false);
        }

        return newCount;
      });
      setScrollPosition(scrollPosition + 1);
    }
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
    if (scrollPosition <= 1) {
      setCount((prevCount) => {
        const newCount = prevCount + 1;

        if (1296 + 500 * newCount > scrollWidth) {
          setIsDisabled(true);
        }

        return newCount;
      });
      setScrollPosition(scrollPosition - 1);
    }
  };

  const getCurrentArray = () => {
    switch (currentType) {
      case "villa":
        return villas;
      case "apartment":
        return apartments;
      default:
        return houses;
    }
  };

  const currentArray = getCurrentArray();

  return (
    <div className="ml-[120px] mt-[120px]">
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-[32px] bg-[var(--color-yellow)]"></div>
        <h2 className="text-xs text-[var(--color-yellow)] font-[family-name:var(--font-lexend-medium)]">
          Our recommendation
        </h2>
      </div>
      <div className="ml-10 flex gap-[139px] items-center">
        <p className="text-2xl text-[var(--color-text)] font-[family-name:var(--font-lexend-semiBold)]">
          Featured House
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setCurrentType("house")}
                className={`py-3 pl-[50px] pr-6 text-sm font-[family-name:var(--font-lexend-medium)] rounded-[32px] ${
                  currentType === "house"
                    ? "text-[var(--color-dark-green-button)] bg-[var(--color-bg-light-green-button)] border border-[var(--color-border-transparent-button)] image act-house"
                    : "text-[var(--color-medium-grey)] border border-[var(--color-light-grey)] image house"
                }`}
              >
                House
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentType("villa")}
                className={`py-3 pl-[50px] pr-6 text-sm font-[family-name:var(--font-lexend-medium)] rounded-[32px] ${
                  currentType === "villa"
                    ? "text-[var(--color-dark-green-button)] bg-[var(--color-bg-light-green-button)] border border-[var(--color-border-transparent-button)] image act-villa"
                    : "text-[var(--color-medium-grey)] border border-[var(--color-light-grey)] image villa"
                }`}
              >
                Villa
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentType("apartment")}
                className={`py-3 pl-[50px] pr-6 text-sm font-[family-name:var(--font-lexend-medium)] rounded-[32px] ${
                  currentType === "apartment"
                    ? "text-[var(--color-dark-green-button)] bg-[var(--color-bg-light-green-button)] border border-[var(--color-border-transparent-button)] image act-apart"
                    : "text-[var(--color-medium-grey)] border border-[var(--color-light-grey)] image apart"
                }`}
              >
                Apartment
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <button
            onClick={scrollLeft}
            className={`mr-4 w-[60px] h-[52px] rounded-[32px]  ${
              scrollPosition === 0
                ? "bg-[var(--color-light-grey)] leftDisabled button"
                : "bg-[var(--color-dark-green-button)] left button"
            }`}
            disabled={scrollPosition === 0}
          ></button>
          <button
            onClick={scrollRight}
            className={`w-[60px] h-[52px] rounded-[32px] ${
              isDisabled
                ? "bg-[var(--color-light-grey)] rightDisabled button"
                : "bg-[var(--color-dark-green-button)] right button"
            }`}
            disabled={isDisabled}
          ></button>
        </div>
      </div>

      <div className="mt-[40px] ml-10 flex items-center">
        <div className="overflow-x-auto scrollable-element" ref={scrollRef}>
          <div className="flex">
            {currentArray.map((x, index) => (
              <HouseCard
                key={index}
                image={x.image}
                name={x.name}
                price={x.price}
                photo={x.photo}
                owner={x.owner}
                location={x.location}
                svg={x.svg}
                status={x.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HouseCard({
  image,
  name,
  price,
  photo,
  owner,
  location,
  svg,
  status,
}) {
  return (
    <div className="flex flex-col gap-6 mr-10 w-[340px]">
      <div className="w-[340px]">
        <div className="relative">
          <Image
            src={image}
            className="w-[340px] h-[382px]"
            alt="изображение"
          />
          <div
            className={`absolute left-[16px] bottom-[16px] min-w-[111px] min-h-[34px] px-[16px] flex items-center rounded-[32px] ${
              status === "Popular"
                ? "bg-[var(--color-red)]"
                : status === "New House"
                ? "bg-[var(--color-blue)]"
                : status === "Best Deals"
                ? "bg-[var(--color-green)]"
                : ""
            }`}
          >
            <Image src={svg} alt="" />
            <p className={`ml-[10px] font-[family-name:var(--font-lexend-medium)] text-[14px] ${
              status === "Popular"
                ? "text-[var(--color-text-red)]"
                : status === "New House"
                ? "text-[var(--color-text-blue)]"
                : status === "Best Deals"
                ? "text-[var(--color-text-green)]"
                : ""
            }`}>
              {status}
            </p>
          </div>
        </div>

        <p className="mt-[24px] text-[var(--color-text-2)] font-[family-name:var(--font-lexend-medium)]  text-xl">
          {name}
        </p>
        <p className="mt-[8px] text-[var(--color-text-3)] font-[family-name:var(--font-lexend-medium)] text-[20px]">
          {price}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Image src={photo} className="" alt="изображение" />
        <div>
          <p className="text-[var(--color-text-2)] font-[family-name:var(--font-lexend-medium)] text-[18px]">
            {owner}
          </p>
          <p className="text-[var(--color-grey)] font-[family-name:var(--font-lexend-medium)] text-[14px]">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
