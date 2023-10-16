import React, { createContext, useContext, useState } from "react";

 const ImageContext = createContext();

export function useImageContext() {
  return useContext(ImageContext);
}
export function ImageProvider({ children }) {
  const [imageData, setImageData] = useState({
    name: "Irshath",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-sCrdXWUHgw0oY0HuxleEAWWCjykaNGkQi4MIX3Yit5Lcc5G57jTWKdZgQ14Zt1c-kA&usqp=CAU",
  });

  const updateImageData = (name, imageUrl) => {
    setImageData({ name, imageUrl });
  };

  return (
    <ImageContext.Provider value={{ imageData, updateImageData }}>
      {children}
    </ImageContext.Provider>
  );
}
