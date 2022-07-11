import Header2 from "../header/Header2";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout2({ children }) {
  return (
    <>
      <Header2 />
      <main>{children}</main>
      <Footer />
      <Navbar />
    </>
  );
}

export default Layout2;
