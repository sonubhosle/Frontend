import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home";
import Cart from "../Components/Cart/Cart";
import Product from "../Components/Product/Product";
import Checkout from '../Components/Checkout/Checkout'
import Orders from  '../Components/Orders/Orders'
import OrderDetails  from '../Components/Orders/Order_Details'

import ProductDetails from '../Components/Product_Details/Product_Details'
const Cutomer_Routes = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:lavelOne/:laveLTwo/:lavelThree" element={<Product />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/account/order" element={<Orders />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path='/product/:productId' element={<ProductDetails />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default Cutomer_Routes;
