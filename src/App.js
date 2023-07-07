
import './App.css';
// import { useContext } from "react";
// import { AuthContext } from "./components/Contextapi";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from './components/Home';

import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/products" element={<Products />} />
      
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
