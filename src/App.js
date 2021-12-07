import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";

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
