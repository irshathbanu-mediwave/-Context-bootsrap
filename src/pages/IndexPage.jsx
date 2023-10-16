import { useContext } from "react";

import Layout from "../components/Layout";
import { ThemeContext } from "../contexts/ThemeContext";

const IndexPage = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Layout title="My context app">
      {/* <p>Current theme: {themeContext.value}</p> */}
      {/* <p>Person</p> */}
    </Layout>
  );
};

export default IndexPage;
