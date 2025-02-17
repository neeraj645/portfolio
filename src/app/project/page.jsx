"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "@/image/photo1.jpg";
import image2 from "@/image/photo2.jpg";
import image3 from "@/image/photo3.jpg";

const images = [
  { src: image1.src, alt: "Slide 1" },
  { src: image2.src, alt: "Slide 2" },
  { src: image3.src, alt: "Slide 3" },
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-play functionality (optional)
  // useEffect(() => {
  //   const interval = setInterval(goToNext, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((imag, index) => (
          <div
            key={index}
            className="relative w-full h-96 flex-shrink-0 overflow-hidden"
          >


            {/* Hover Text and Background */}
            <div className="absolute inset-0 flex items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Black Background with Fade */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              {/* Text */}
              <p className="relative z-10 text-white text-lg pr-4">Hover Text</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/75 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white bg-black/50 hover:bg-black/75 transition-colors"
      >
        ›
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;