import React, { useState, useEffect, useRef } from 'react';

import { Loading } from '../'

interface GalleryLazyImageProps {
  imageUrl: string,
  title?: string,
  overlayText?: string,
  alt?: string;
}

const onHoverBkgStyle = 'group-hover:bg-gradient-to-t group-hover:from-[rgba(0,0,0,0.5)]'
const bkgGradient = 'bg-gradient-to-t from-[rgba(0,0,0,0.5)]'

export default function GalleryLazyImage({ imageUrl, title, overlayText, alt }: GalleryLazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

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
      className="relative group h-[60vw] w-[100vw] xs:h-[40vw] xs:w-[45vw] sm:h-[40vw] sm:w-[38vw] md:h-[25vw] md:w-[26vw] lg:h-[15vw] lg:w-[20vw] bg-cover bg-center mb-[20px] rounded-md overflow-hidden bg-button-bkg" // Placeholder styling
    >
      {isLoaded && (
        <>
          <div className={`absolute top-0 left-0 w-full h-full ${title ? bkgGradient: onHoverBkgStyle}`} />
          <div
            className='absolute text-white bottom-[10px] left-[8px] text-[16px] w-[80%]'
          >
            {title && <span className='text-[14px]'>{title}</span>}
            {overlayText && <span className='text-[14px] hidden group-hover:inline'>{overlayText}</span>}
          </div>
          </>
      )}

      {!isLoaded && <Loading />}
    </div>
  )
}