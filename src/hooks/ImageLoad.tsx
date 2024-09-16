import React, { useState, useEffect } from "react";
interface Props {
  src: string;
  placeholder: string;
  alt: string;
}
const ImageLoad = React.memo(({ src, placeholder, alt = "" }: Props) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, updateSrc] = useState(placeholder);

  useEffect(() => {
    // start loading original image
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // When image is loaded replace the src and set loading to false
      console.log("Load done");

      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      style={{
        opacity: loading ? 0.5 : 1,
        width: "40vw",
        height: "80vh",
        transition: "opacity .15s linear",
      }}
      alt={alt}
    />
  );
});

export default ImageLoad;
