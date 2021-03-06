// Write an App component that serves as the container for all sub-components of this application

import React from "react";
// import all sub components 
import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import ActiveCategory from "./components/activeCategory";
// import for SimpleCart lab 37
import SimpleCart from "./components/SimpleCart"
// app css file 
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SimpleCart />
      <Categories />
      <ActiveCategory />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
