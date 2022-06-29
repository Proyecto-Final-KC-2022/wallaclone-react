import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage"
import SignUp from "./components/signup/SignUp"
import Products from "./pages/ProductsPage/ProductsPage"
import Product from "./pages/ProductPage/ProductPage"
import Products2 from "./pages/CategoryPage/CategoryPage"
import AccountPage from "./pages/AccountPage/AccountPage"

/*
  TODO PENDIENTE CORREGIR LAS IMPORTACIONES PARA TODO LO QUE NECESITA EL LOGIN.

  TODO MODIFICAR LOS ARCHIVOS JS A TS

  TODO PROBAR CONEXIÓN CON API

*/
import LoginPage from "./components/auth/LoginPage"

import './index.css'

function App() {
  return (
    <div  className="m-0 p-0 w-full min-h-[100vh] block">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category" element={<Products2 />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
