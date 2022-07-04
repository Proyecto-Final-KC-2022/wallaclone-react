import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./components/signup/SignUp";
import Products from "./pages/ProductsPage/ProductsPage";
import Product from "./pages/ProductPage/ProductPage";
import Products2 from "./pages/CategoryPage/CategoryPage";
import AccountPage from "./pages/AccountPage/AccountPage";

/*
  MARCE
*/

import { LoginPage } from "./components/auth";

/*
  TODO PENDIENTE CORREGIR LAS IMPORTACIONES PARA TODO LO QUE NECESITA EL LOGIN.

  TODO MODIFICAR LOS ARCHIVOS JS A TS

  TODO PROBAR CONEXIÓN CON API

  import LoginPage from "./components/auth/LoginPage"
*/

import { useState } from "react";

import "./index.css";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

import Login from "./components/login/Login";

function App() {
  return (
    <div className="m-0 p-0 w-full min-h-[100vh] block">
      <BrowserRouter>
        <Routes>
          <Route index element={<ProductsPage />} />

          {/* <Route path="/login" element={<LoginPage />} /> */}

          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:name/:id" element={<Product />} />
          <Route path="/category" element={<Products2 />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
