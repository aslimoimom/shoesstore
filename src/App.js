// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Cart from './components/Cart';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails'; // Import ProductDetails component

import shoes from './assets/img/shoes.png';
import shoes2 from './assets/img/shoes2.png';
import shoes3 from './assets/img/shoes3.png';
import shoes4 from './assets/img/shoes4.png';
import shoes5 from './assets/img/shoes5.png';
import shoes6 from './assets/img/shoes6.png'; 

const data = [
  { id: 1, name: "Running shoes", gender : "men", price: 100, img : shoes, backgroundColor : "transparent" },
  { id: 2, name: "Basketball shoes", gender : "women", price: 200, img : shoes2, backgroundColor : "transparent" },
  { id: 3, name: "Running shoes", gender : "women", img : shoes3, price: 300, backgroundColor : "transparent" },
  { id: 4, name: "Basketball shoes", gender : "men", price: 300, img : shoes4, backgroundColor : "transparent" },
  { id: 5, name: "Running shoes", gender : "women", price: 400, img : shoes5, backgroundColor : "transparent" },
  { id: 6, name: "Running shoes", gender : "men", price: 500, img : shoes6, backgroundColor : "transparent" }
];


function App() {
  const [genderproducts, setGenderproducts] = useState(data);
  const [cart, setCart] = useState([]);

  const filterProducts = (gender) => {
    if (gender === "all") {
      setGenderproducts(data);
    } else {
      setGenderproducts(data.filter((item) => item.gender === gender));
    }
  };

  return (
    <>
      <Navigation filterProducts={filterProducts} />
      <Hero />
      <Routes>
        <Route path="/" element={<Products genderproducts={genderproducts} cart={cart} setCart={setCart} />} />
        <Route path="/product/:id" element={<ProductDetails data={data} />} />
      </Routes>
      <Cart cart={cart} />
    </>
  );
}

export default App;
