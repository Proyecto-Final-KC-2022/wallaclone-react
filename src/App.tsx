import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "../src/components/auth/context";
import Login from "../src/components/auth/LoginPage/LoginPage";
import SignUp from "./pages/SignupPage/SignupPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Products from "./pages/ProductsPage/ProductsPage";
import Product from "./pages/ProductPage/ProductPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RequireAuth from "./components/auth/RequireAuth";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const handleSignup = () => setIsLogged(true);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  const authProps = { isLogged, handleSignup, handleLogin, handleLogout };

  return (
    <AuthProvider {...authProps}>
      <div className='m-0 p-0 w-full min-h-[100vh] block'>
        <BrowserRouter>
          <Routes>
            <Route index element={<ProductsPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:name/:advertId' element={<Product />} />
            <Route
              path='/account/*'
              element={
                <RequireAuth>
                  <AccountPage />
                </RequireAuth>
              }
            />
            <Route path='/404' element={<NotFoundPage />} />
            <Route path='*' element={<Navigate to='/404' />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
