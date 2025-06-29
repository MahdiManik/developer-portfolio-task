/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useRef } from "react";

interface VirtualizedListProps<T extends { id?: number | string } | any> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemHeight: number;
  windowHeight?: number;
  overscan?: number;
  className?: string;
  containerClassName?: string;
}

/**
 * VirtualizedList component for efficiently rendering large lists
 * Uses IntersectionObserver for lazy loading and only renders items in viewport
 */
function VirtualizedList<T>({
  data,
  renderItem,
  itemHeight,
  windowHeight = 600,
  overscan = 5,
  className,
  containerClassName,
}: VirtualizedListProps<T>) {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 });
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  // Calculate visible range based on scroll position
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const totalItems = data.length;

    const handleScroll = () => {
      // Get current scroll position
      const scrollTop = container.scrollTop;
      scrollPositionRef.current = scrollTop;

      // Calculate visible range with overscan
      const startIndex = Math.max(
        0,
        Math.floor(scrollTop / itemHeight) - overscan
      );
      const endIndex = Math.min(
        totalItems - 1,
        Math.floor((scrollTop + windowHeight) / itemHeight) + overscan
      );

      setVisibleRange({ start: startIndex, end: endIndex });
    };

    // Initial calculation
    handleScroll();

    // Add scroll event listener
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [data.length, itemHeight, overscan, windowHeight]);

  // Get only the items that should be visible
  const visibleItems = data.slice(visibleRange.start, visibleRange.end + 1);

  // Calculate total height to maintain proper scrollbar
  const totalHeight = data.length * itemHeight;

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${containerClassName || ""}`}
      style={{ height: windowHeight, position: "relative" }}
      aria-label="Virtualized list"
      role="list"
    >
      <div
        className={className}
        style={{ height: totalHeight, position: "relative" }}
      >
        {visibleItems.map((item, localIndex) => {
          const actualIndex = visibleRange.start + localIndex;
          // Use a safe approach to keys that works with any type
          const itemKey = typeof item === 'object' && item !== null && 'id' in item && item.id !== undefined 
            ? String(item.id) 
            : String(actualIndex);
          
          return (
            <div
              key={itemKey}
              style={{
                position: "absolute",
                top: actualIndex * itemHeight,
                left: 0,
                right: 0,
                height: itemHeight,
              }}
              role="listitem"
            >
              {renderItem(item, actualIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { VirtualizedList };
