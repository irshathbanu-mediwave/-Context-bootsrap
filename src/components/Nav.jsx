import React, { useContext } from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { ThemeDispatchContext } from "../contexts/ThemeContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { ImageProvider } from "./Profile";

const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);
  // Image source and name (you can replace these with your actual data)
  const imageSrc =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_AynsOPMzpCZWWyf5gwRuJA6Bq6FlMnNcn3W9XEXu8h_XClZ0BPcOJjERZGR3JABUc-A&usqp=CAU";
  const imageName = "Irshath";
  function handleClick(mode) {
    themeDispatch({ value: mode });
  }
  return (
    <nav className="container-nav">
      <ul>
        <li>
          <strong>Profile Card</strong>
        </li>
      </ul>
      <ul>
        <li>
          <ImageProvider>
            <div className="App">
              <Card>
                <CardMedia
                  component="img"
                  alt={imageName}
                  height="200"
                  image={imageSrc}
                />
                <Typography variant="h6">{imageName}</Typography>
              </Card>
            </div>
          </ImageProvider>
        </li>
        <li>
          {themeContext.value === "light" ? (
            <button onClick={() => handleClick("dark")}>Dark</button>
          ) : (
            <button onClick={() => handleClick("light")}>Light</button>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
