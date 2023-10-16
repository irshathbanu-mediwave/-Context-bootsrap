import React from "react";
import { useImageContext } from "./Profile";
import { Card,  CardMedia} from "@mui/material";
import "./Profile.css";
const ImageDisplay = () => {
  const { imageData } = useImageContext();

  return (
    <Card>
      <CardMedia
        className="Profile"
        component="img"
        // alt={imageData.name}
        height="100"
        image={imageData.imageUrl}
      />

    
    </Card>
  );
};

export default ImageDisplay;
