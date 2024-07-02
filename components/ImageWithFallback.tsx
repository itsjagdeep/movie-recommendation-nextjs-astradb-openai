"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const ImageWithFallback = ({ 
  src, 
  alt, 
  className, 
  width = 300, 
  height = 450,
  ...rest 
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...rest}
      onError={() => {
        setImgSrc(
          "https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg"
        );
      }}
    />
  );
};

export default ImageWithFallback;