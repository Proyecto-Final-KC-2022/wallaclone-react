import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";

import "./index.css";

import { AuthProvider } from "../src/components/auth/context";
import Login from "../src/components/auth/LoginPage/LoginPage";
import SignUp from "./pages/SignupPage/SignupPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Products from "./pages/ProductsPage/ProductsPage";
import Product from "./pages/ProductPage/ProductPage";
import Products2 from "./pages/CategoryPage/CategoryPage";
import AccountPage from "./pages/AccountPage/AccountPage";

/*
  MARCE
*/

/*
  TODO PENDIENTE CORREGIR LAS IMPORTACIONES PARA TODO LO QUE NECESITA EL LOGIN.

  TODO MODIFICAR LOS ARCHIVOS JS A TS

  TODO PROBAR CONEXIÓN CON API

  import LoginPage from "./components/auth/LoginPage"
*/

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const handleSignup = () => setIsLogged(true);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  const authProps = { isLogged, handleSignup, handleLogin, handleLogout };

  return (
    <AuthProvider {...authProps}>
      <div className="m-0 p-0 w-full min-h-[100vh] block">
        <BrowserRouter>
          <Routes>
            <Route index element={<ProductsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:name/:id" element={<Product />} />
            <Route path="/category" element={<Products2 />} />
            <Route path="/account/*" element={<AccountPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
