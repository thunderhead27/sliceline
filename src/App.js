import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Menu } from "./components/Menu/Menu";
import { FoodDialog } from "./components/FoodDialog/FoodDialog";

function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood} />
      <Navbar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
