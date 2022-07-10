import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import Login from "../login/Login";

function Layout({
  children,
  isMainPage,
  getSearchInputValue,
}: {
  children;
  isMainPage: boolean;
  getSearchInputValue: (value: string) => void;
}) {
  return (
    <>
      <Header
        isMainPage={isMainPage}
        getSearchInputValue={getSearchInputValue}
      />
      <main>{children}</main>
      <Footer />
      <Navbar />
    </>
  );
}

export default Layout;
