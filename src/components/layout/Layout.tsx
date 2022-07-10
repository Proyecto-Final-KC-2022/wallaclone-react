import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout({ children }, {isLogged}) {
  return (
    <>
      <Header isLogged={isLogged} />
      <main>{children}</main>
      <Footer />
      <Navbar />
    </>
  );
}

export default Layout;
