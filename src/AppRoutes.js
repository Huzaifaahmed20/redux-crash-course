import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products, ProductDetails, Cart } from "./pages";
import { AppNavbar } from "./components";

export default function AppRoutes() {
  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
