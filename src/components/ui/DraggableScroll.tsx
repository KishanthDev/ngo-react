'use client';

import React, { useState, forwardRef } from 'react';
import type { MouseEvent, UIEvent } from 'react';

interface DraggableScrollProps {
  children: React.ReactNode;
  className?: string;
  onScroll?: (e: UIEvent<HTMLDivElement>) => void;
}

export const DraggableScroll = forwardRef<HTMLDivElement, DraggableScrollProps>(
  ({ children, className = '', onScroll }, ref) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setStartX(e.pageX - e.currentTarget.offsetLeft);
      setScrollLeft(e.currentTarget.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - e.currentTarget.offsetLeft;
      const walk = (x - startX) * 1.5; // Scroll speed multiplier
      e.currentTarget.scrollLeft = scrollLeft - walk;
    };

    return (
      <div
        ref={ref}
        onScroll={onScroll}
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
  }
);

DraggableScroll.displayName = 'DraggableScroll';