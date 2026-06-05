'use client';

import React, { useRef, useState } from 'react';
import type { MouseEvent } from 'react';

interface DraggableScrollProps {
  children: React.ReactNode;
  className?: string;
}

export const DraggableScroll: React.FC<DraggableScrollProps> = ({ children, className = '' }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`flex overflow-x-auto no-scrollbar snap-x snap-mandatory select-none ${
        isDragging ? 'cursor-grabbing snap-none scroll-auto' : 'cursor-grab scroll-smooth'
      } ${className}`}
    >
      {children}
    </div>
  );
};