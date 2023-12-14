import React, { useState, useEffect, useRef } from 'react';

interface GalleryLazyImageProps {
  imageUrl: string;
  alt?: string;
}

export default function GalleryLazyImage({ imageUrl, alt }: GalleryLazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  const backgroundStyle = isLoaded ? { backgroundImage: `url(${imageUrl})` } : {};

  return (
    <div
      ref={elementRef}
      style={backgroundStyle}
      aria-label={alt}
      className="relative h-[60vw] w-[100vw] xs:h-[40vw] xs:w-[45vw] sm:h-[40vw] sm:w-[38vw] md:h-[25vw] md:w-[26vw] lg:h-[15vw] lg:w-[20vw] bg-cover bg-center mb-[20px] rounded-md overflow-hidden bg-button-bkg" // Placeholder styling
    >
      {/* {!isLoaded && <div>Loading...</div>} */}
    </div>
  )
}