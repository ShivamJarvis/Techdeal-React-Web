import React from "react";
import NavbarComponent from "./../Components/NavbarComponent";
import ProductCategory from "./../Components/ProductCategory";
function Shop() {
  return (
    <div>
      <NavbarComponent pageName="shop"></NavbarComponent>
      <ProductCategory image="console.jpg" headingText="Consoles" />
      <ProductCategory image="ssd.jpg" headingText="Storages" />
      <ProductCategory image="gpu.png" headingText="Computer Acessories" />
      <ProductCategory image="sound.jpg" headingText="Sound" />
      <ProductCategory image="networking.jpg" headingText="Networking" />
      <ProductCategory image="games.jpg" headingText="Games" />
    </div>
  );
}

export default Shop;
