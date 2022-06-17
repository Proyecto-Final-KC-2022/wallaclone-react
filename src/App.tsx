import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage"
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp"
import Products from "./pages/ProductsPage/ProductsPage"
import Products2 from "./pages/CategoryPage/CategoryPage"

import './index.css'

function App() {
  return (
    <div  className="m-0 w-full h-full block">
      <div  className="flex flex-col min-h-full">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category" element={<Products2 />} />
          </Routes>
        </BrowserRouter>
      </div> 
    </div>
    
  )
}

export default App
