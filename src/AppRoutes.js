import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products, ProductDetails, Login } from "./pages";
import { AppNavbar } from "./components";

export default function AppRoutes() {
  return (
    <>
      <AppNavbar />

      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Products />} />
        <Route path="/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}
