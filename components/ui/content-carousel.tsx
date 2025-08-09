"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface CarouselItem {
  [key: string]: unknown;
  full: string;
  blur: string;
}

interface ContentCarouselProps {
  items: CarouselItem[];
  className?: string;
  onItemChange?: (item: CarouselItem, index: number) => void;
}

export const ContentCarousel = ({
  items,
  className = "",
  onItemChange,
}: ContentCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    const clampedIndex = Math.min(Math.max(currentIndex, 0), items.length - 1);
    if (clampedIndex !== currentIndex) setCurrentIndex(clampedIndex);
  }, [items.length]);

  const handleIndexChange = (newIndex: number) => {
    let loopIndex = newIndex;

    if (newIndex < 0) {
      loopIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      loopIndex = 0;
    }

    setCurrentIndex(loopIndex);
    onItemChange?.(items[loopIndex], loopIndex);
  };

  if (items.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative z-10 w-full">
        <div className="relative">
          <motion.div
            key={items[currentIndex].full}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={items[currentIndex].full}
              alt="game-preview"
              width={0}
              height={0}
              sizes="100vw"
              placeholder= "blur"
              blurDataURL={items[currentIndex].blur}
              className="w-full h-full rounded-lg"
            />
          </motion.div>

          {/* Tombol Kiri */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleIndexChange(currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur border border-primary/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Tombol Kanan */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleIndexChange(currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/80 backdrop-blur border border-primary/10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
