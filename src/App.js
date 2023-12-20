import React from "react";
import Header from "./components/header";
import Categories from "./components/categories";
import Carousel from "./components/carouesl";
import Products from "./components/products";

const App = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Carousel />
      <Products />
    </div>
  );
};

export default App;
