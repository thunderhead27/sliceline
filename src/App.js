import React from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
      <div>Hello Sliceline</div>
    </>
  );
}

export default App;
