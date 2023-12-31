import { useEffect, useContext } from "react";
import Nav from "./Nav";
import { ThemeContext } from "../contexts/ThemeContext";

const Layout = (props) => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);

  useEffect(() => {
    if (themeContext.value) {
      document
        .querySelector("html")
        .setAttribute("data-theme", themeContext.value);
    }
  }, [themeContext.value]);
  return (
    <>
      <Nav />
      <main className="container-Main">{props.children}</main>
    </>
  );
};

export default Layout;
