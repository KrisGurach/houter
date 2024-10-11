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

  const leftButtonClass =
    scrollPosition === 0
      ? "text-[var(--color-light-grey)]"
      : "text-[var(--color-dark-green-button)]";
  const rightButtonClass =
    scrollPosition === 1
      ? "text-[var(--color-light-grey)]"
      : "text-[var(--color-dark-green-button)]";

  return (
    <div className="ml-[120px] my-[120px]">
      <h2 className="text-xs text-[var(--color-yellow)] font-[family-name:var(--font-lexend-medium)]">
        Our recommendation
      </h2>
      <div className="flex gap-[139px] items-center">
        <p className="text-2xl text-[var(--color-text)] font-[family-name:var(--font-lexend-semiBold)]">
          Featured House
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setCurrentType("house")}
                className={`py-2 px-4 text-sm font-[family-name:var(--font-lexend-semiBold)] rounded-[32px] ${
                  currentType === "house"
                    ? "text-[var(--color-dark-green-button)] bg-[var(--color-bg-light-green-button)] border border-[var(--color-border-transparent-button)]"
                    : "text-[var(--color-medium-grey)] border border-[var(--color-light-grey)]"
                }`}
              >
                House
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentType("villa")}
                className={`py-2 px-4 text-sm font-[family-name:var(--font-lexend-semiBold)] rounded-[32px] ${
                  currentType === "villa"
                    ? "text-[var(--color-dark-green-button)] bg-[var(--color-bg-light-green-button)] border border-[var(--color-border-transparent-button)]"
                    : "text-[var(--color-medium-grey)] border border-[var(--color-light-grey)]"
                }`}
              >
                Villa
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentType("apartment")}
                className={`py-2 px-4 text-sm font-[family-name:var(--font-lexend-semiBold)] rounded-[32px] ${
                  currentType === "apartment"
                    ? "text-[var(--color-dark-green-button)] bg-[var(--color-bg-light-green-button)] border border-[var(--color-border-transparent-button)]"
                    : "text-[var(--color-medium-grey)] border border-[var(--color-light-grey)]"
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
                ? "bg-[var(--color-light-grey)] leftDisabledButton"
                : "bg-[var(--color-dark-green-button)] leftButton"
            }`}
            disabled={scrollPosition === 0}
          ></button>
          <button
            onClick={scrollRight}
            className={`w-[60px] h-[52px] rounded-[32px] ${
              isDisabled
                ? "bg-[var(--color-light-grey)] rightDisabledButton"
                : "bg-[var(--color-dark-green-button)] rightButton"
            }`}
            disabled={isDisabled}
          ></button>
        </div>
      </div>

      <div className="mt-[40px] flex items-center">
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HouseCard({ image, name, price, photo, owner, location }) {
  return (
    <div className="flex flex-col gap-6 mr-10 w-[340px]">
      <div className="w-[340px]">
        <Image src={image} className="w-[340px] h-[382px]" alt="изображение" />
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
