import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import Login from "../login/Login";

function Layout({ children , isMainPage}) {
  /* const [popupModal, setPopupModal] = useState(false);
  const onClickModalButton = () => {
    setPopupModal(true);
  }; */

  return (
    <>
      {/* <Header onClickModalButton={onClickModalButton} /> */}
      <Header isMainPage={isMainPage} />
        <main>
          {children}
          {/* <Login open={popupModal} onClose={() => setPopupModal(false)} /> */}
        </main>  
      <Footer />
      <Navbar />
    </>
  );
}

export default Layout;
