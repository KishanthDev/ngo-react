'use client';

import { useRef, useState } from "react";
import { DraggableScroll } from "../ui/DraggableScroll";

const SLIDES = [
  { alt: "GOA Monkeys", src: "https://cfstatic.give.do/fe08052f-9bfa-40b7-b096-c2d6ac7c63ab.webp" },
  { alt: "Blindness OTM", src: "https://cfstatic.give.do/fd21b01d-c414-40ad-846d-87ec40ef2282.webp" },
  { alt: "Cuddles", src: "https://cfstatic.give.do/548ec663-aa3b-4d90-ad4d-4762ee278ff0.webp" },
  { alt: "Sapna Eye Hospital", src: "https://cfstatic.give.do/87e37f4b-5980-4c91-b287-3c1ee2456983.webp" },
  { alt: "Prathana Foundation", src: "https://cfstatic.give.do/74049a58-0912-4264-9d88-0162191799da.webp" },
];

export const HeroSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Synchronize the pagination dots when manually scrolling or dragging
  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    const container = sliderRef.current;
    const scrollPosition = container.scrollLeft;
    const containerCenter = scrollPosition + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    // Find the slide that is closest to the center of the viewport
    Array.from(container.children).forEach((child, index) => {
      const childElement = child as HTMLElement;
      const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const slide = sliderRef.current.children[index] as HTMLElement;
    
    slide.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const nextSlide = () => {
    const next = activeIndex === SLIDES.length - 1 ? 0 : activeIndex + 1;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = activeIndex === 0 ? SLIDES.length - 1 : activeIndex - 1;
    scrollToSlide(prev);
  };

  return (
    <div className="relative w-full mx-auto group">
      
      {/* Draggable Slider Track */}
      <DraggableScroll
        ref={sliderRef}
        onScroll={handleScroll}
        className="gap-4 px-4 md:px-[5%] pt-4 pb-4"
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.alt}
            className="snap-center shrink-0 w-full md:w-[90%] relative h-[180px] sm:h-[320px]"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="w-full h-[72%] md:h-full object-cover rounded-[15px] shadow-md select-none pointer-events-none"
            />
          </div>
        ))}
      </DraggableScroll>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 md:left-6 top-[40%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 md:right-6 top-[40%] md:top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-1 md:mt-2 pb-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full border ${
              activeIndex === index
                ? "w-6 h-2.5 bg-rose-500 border-rose-500"
                : "w-2.5 h-2.5 bg-gray-300 border-gray-300"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
};