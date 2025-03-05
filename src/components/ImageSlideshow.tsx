"use client"

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageSlideshowProps {
  images: string[];
}

export default function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return <div className="text-gray-400">No images available</div>;
  }

  return (
    <div className="relative h-full w-full">
      <div className="h-64 md:h-80 relative rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          fill
          className="object-contain"
          priority={currentIndex === 0}
        />
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="flex justify-center mt-2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
} 