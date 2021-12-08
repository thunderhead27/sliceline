import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Navbar } from "./components/Navbar/Navbar";
import { Order } from "./components/Order/Order";
import { Banner } from "./components/Banner/Banner";
import { Menu } from "./components/Menu/Menu";
import { FoodDialog } from "./components/FoodDialog/FoodDialog";
import { useOpenFood } from "./hooks/useOpenFood";
import { useOrders } from "./hooks/useOrders";

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
