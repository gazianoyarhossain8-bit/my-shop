import { Routes, Route } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:7000/api";
axios.defaults.withCredentials = true;

import Header from "./components/Header";
import ProductList from "./components/productList";
import ProductDetails from "./components/productDetailePage";
import CartPage from "./components/CartPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import ProductUpload from "./components/ProductUpload";
import Order from "./components/Order";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productupload" element={<ProductUpload/>}/>
        <Route path="/orders" element={<Order/>}/>
        <Route path="/products" element={<ProductList/>}/>
      </Routes>
      <Footer/>
      </>
    
  );
}

export default App;