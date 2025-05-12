"use client";
import React, { useState } from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ExpandCollapse from "../../components/expand-collapse/ExpandCollapse";

const listProduct = [
  {
    imgSrc:
      "https://dst.assets.gameloft.com/assets/DS_article_thumbnail_season4_1920x1080_EN_2c64867ea1.jpg",
    alt: "Product 1",
    title: "SEASON 04",
    description: "Disney Speedstorm season 4 the cave of wonders available now",
  },
  {
    imgSrc:
      "https://dst.assets.gameloft.com/assets/DS_23037_S_Season3_Key_Art_XBOX_HERO_EN_1310aad214.jpg",
    alt: "Product 2",
    title: "SEASON 03",
    description: "Disney Speedstorm season 3 ‘ohana available now",
  },
  {
    imgSrc:
      "https://dst.assets.gameloft.com/assets/DS_Season12_Banner_Background_EN_001c87e540.jpg",
    alt: "Product 3",
    title: "SEASON 12",
    description: "Disney Speedstorm tron-inspired season 12 available now",
  },
  {
    imgSrc:
      "https://dst.assets.gameloft.com/assets/DS_article_thumbnail_season4_1920x1080_EN_2c64867ea1.jpg",
    alt: "Product 4",
    title: "SEASON 04",
    description: "Disney Speedstorm season 4 the cave of wonders available now",
  },
  {
    imgSrc:
      "https://dst.assets.gameloft.com/assets/DS_23037_S_Season3_Key_Art_XBOX_HERO_EN_1310aad214.jpg",
    alt: "Product 5",
    title: "SEASON 3",
    description: "Disney Speedstorm season 3 ‘ohana available now",
  },
  {
    imgSrc:
      "https://dst.assets.gameloft.com/assets/DS_Season12_Banner_Background_EN_001c87e540.jpg",
    alt: "Product 6",
    title: "SEASON 12",
    description: "Disney Speedstorm tron-inspired season 12 available now",
  },
];

const Part32 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const refSlide = React.useRef<SlideshowRef>(null);

  return (
    <div className="mt-8">
      <h3 className="text-lg mb-4">
        2.Using your HTML structure from Part 1, refactor it into a ReactJS
        component using TailwindCSS for styling. Implement at least one state
        variable that updates the displayed product carousel based on user
        interaction
      </h3>
      <ExpandCollapse>
        <div className="max-w-[800px] mx-auto mt-10">
          <Slide
            ref={refSlide}
            defaultIndex={currentSlide}
            transitionDuration={300}
          >
            {listProduct.map((product, index) => (
              <div
                className="flex items-center justify-center h-[450px]"
                key={index}
              >
                <div className="relative">
                  <img
                    className="aspect-video rounded"
                    src={product.imgSrc}
                    alt={product.alt}
                  />
                  <div className="absolute inset-0 bg-black opacity-20" />
                  <div className="absolute left-0 bottom-0 p-10 text-white text-shadow-xs text-shadow-black rounded">
                    <h3 className="font-bold text-5xl">{product.title}</h3>
                    <p className="text-xl">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
          <div>
            <div className="flex justify-center mt-4 space-x-2">
              <button
                className="rounded px-3 shadow-md py-1 cursor-pointer border border-transparent hover:border border-solid hover:border-blue-400 bg-gray-300"
                onClick={() => {
                  setCurrentSlide(
                    (prev) =>
                      (prev - 1 + listProduct.length) % listProduct.length
                  );
                  refSlide.current?.goTo(
                    (currentSlide - 1 + listProduct.length) % listProduct.length
                  );
                }}
              >
                &lt;
              </button>
              {listProduct.map((_, index) => (
                <button
                  key={index}
                  className={`rounded px-3 py-1 shadow-md cursor-pointer border border-transparent hover:border border-solid hover:border-blue-400 ${
                    currentSlide === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                  onClick={() => {
                    setCurrentSlide(index);
                    refSlide.current?.goTo(index);
                  }}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="rounded px-3 py-1 shadow-md cursor-pointer border border-transparent hover:border border-solid bg-gray-300 hover:border-blue-400"
                onClick={() => {
                  setCurrentSlide((prev) => (prev + 1) % listProduct.length);
                  refSlide.current?.goTo(
                    (currentSlide + 1) % listProduct.length
                  );
                }}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </ExpandCollapse>
    </div>
  );
};

export default Part32;
