import { useContext } from "react";

import { ThemeDispatchContext } from "../contexts/ThemeContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ProfileCard from "./Profile";
const Nav = () => {
  const themeDispatch = useContext(ThemeDispatchContext);
  const themeContext = useContext(ThemeContext);
  console.log(themeDispatch);

  function handleClick(mode) {
    console.log({ value: mode });
    themeDispatch({ value: mode });
  }

  return (
    <nav class="container-nav">
      <ul>
        <li>
          <strong>Profile Card</strong>
        </li>
      </ul>
      <ul>
        <li>
          <ProfileCard />
        </li>
        <li>
          {themeContext.value === "light" ? (
            <button onClick={() => handleClick("dark")}>🌙</button>
          ) : (
            <button onClick={() => handleClick("light")}>🌞</button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
