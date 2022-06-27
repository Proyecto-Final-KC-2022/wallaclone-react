import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage"
import SignUp from "./components/signup/SignUp"
import Products from "./pages/ProductsPage/ProductsPage"
import Product from "./pages/ProductPage/ProductPage"
import Products2 from "./pages/CategoryPage/CategoryPage"
import AccountPage from "./pages/AccountPage/AccountPage"


import './index.css'

function App() {
  return (
    <div  className="m-0 p-0 w-full min-h-[100vh] block">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
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
